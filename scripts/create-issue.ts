import { Octokit } from '@octokit/rest';
import dotenv from 'dotenv';

dotenv.config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const [owner, repo, title, body] = process.argv.slice(2);

async function createIssue() {
  try {
    const response = await octokit.issues.create({
      owner,
      repo,
      title,
      body,
    });
    console.log(`Issue created: ${response.data.html_url}`);
  } catch (error) {
    console.error('Error creating issue:', error);
  }
}

if (!process.env.GITHUB_TOKEN) {
  console.error('GITHUB_TOKEN is not set in the environment variables.');
  process.exit(1);
}

if (!owner || !repo || !title) {
  console.error('Usage: node create-issue.js <owner> <repo> <title> [body]');
  process.exit(1);
}

createIssue();
