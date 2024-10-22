import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { issue } = req.body;
  if (!issue) {
    return res.status(400).json({ message: 'Invalid payload' });
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  try {
    await octokit.issues.create({
      owner: 'your-github-username',
      repo: 'your-repo-name',
      title: issue.summary,
      body: issue.description,
    });
    res.status(201).json({ message: 'Issue created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating issue' });
  }
};

export default handler;
