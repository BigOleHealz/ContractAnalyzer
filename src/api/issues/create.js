import { authenticate } from '../../utils/auth';
import { createIssue } from '../../services/issueService';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const token = req.headers.authorization;
  if (!authenticate(token)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ message: 'Title and body are required' });
  }

  const issue = await createIssue(title, body);
  return res.status(201).json(issue);
}