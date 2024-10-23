import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Parse the incoming Jira webhook payload
    const jiraPayload = req.body;
    // TODO: Implement logic to create GitHub issue using the parsed data
    res.status(200).json({ message: 'Jira webhook received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
