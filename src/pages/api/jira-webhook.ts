import { NextApiRequest, NextApiResponse } from 'next';
import { createGitHubIssue } from '@/utils/githubClient';
import { logError, logInfo } from '@/utils/logger';

const JIRA_SECRET = process.env.JIRA_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const signature = req.headers['x-jira-signature'];
  if (!signature || signature !== JIRA_SECRET) {
    logError('Unauthorized request', { signature });
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const { issue } = req.body;
    const { key, fields } = issue;
    const { summary, description, labels } = fields;

    const title = `[${key}] ${summary}`;
    const body = `${description}\n\n[Jira Ticket](https://your-jira-instance/browse/${key})`;

    const githubResponse = await createGitHubIssue('your-github-username', 'your-repo-name', title, body, labels);
    logInfo(`GitHub issue created: ${githubResponse.html_url}`);

    res.status(200).json({ message: 'GitHub issue created', issueUrl: githubResponse.html_url });
  } catch (error) {
    logError('Failed to process Jira webhook', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
