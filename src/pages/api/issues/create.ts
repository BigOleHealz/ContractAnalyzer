import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, description } = req.body;
    try {
      const newIssue = await prisma.issue.create({
        data: {
          title,
          description,
          status: 'open',
        },
      });
      res.status(200).json(newIssue);
    } catch (error) {
      res.status(500).json({ error: 'Error creating issue' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
