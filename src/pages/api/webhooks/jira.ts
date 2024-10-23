import { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: GITHUB_TOKEN });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { issue } = req.body;
  if (!issue) {
    return res.status(400).json({ message: 'Invalid payload' });
  }

  try {
    const { data } = await octokit.issues.create({
      owner: 'your-github-username',
      repo: 'your-repo-name',
      title: issue.title,
      body: issue.description,
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating GitHub issue', error });
  }
}
