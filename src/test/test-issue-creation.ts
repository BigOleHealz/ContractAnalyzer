import { Octokit } from '@octokit/rest';

describe('GitHub Issue Creation', () => {
  it('should create a test issue successfully', async () => {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const { data } = await octokit.issues.create({
      owner: 'BigOleHealz',
      repo: 'ContractAnalyzer',
      title: 'Test Issue',
      body: 'This is a test issue created programmatically.'
    });
    expect(data).toHaveProperty('number');
  });
});