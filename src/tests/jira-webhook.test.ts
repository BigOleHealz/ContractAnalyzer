import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/jira-webhook';

describe('/api/jira-webhook API Endpoint', () => {
  it('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it('should return 401 if secret is invalid', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      headers: { 'x-jira-signature': 'invalid_secret' },
    });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(401);
  });

  it('should return 200 and create a GitHub issue for valid requests', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      headers: { 'x-jira-signature': process.env.JIRA_SECRET },
      body: {
        issue: {
          key: 'JIRA-123',
          fields: {
            summary: 'Test Issue',
            description: 'This is a test issue from Jira.',
            labels: ['bug'],
          },
        },
      },
    });

    // Mock the GitHub API client
    jest.mock('@/utils/githubClient', () => ({
      createGitHubIssue: jest.fn().mockResolvedValue({
        html_url: 'https://github.com/your-repo/issues/1',
      }),
    }));

    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toEqual(
      expect.objectContaining({
        message: 'GitHub issue created',
        issueUrl: 'https://github.com/your-repo/issues/1',
      })
    );
  });
});
