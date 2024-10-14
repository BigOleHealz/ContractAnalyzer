const { Octokit } = require('@octokit/rest');
require('dotenv').config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function createIssue(owner, repo, title, body, labels = [], assignees = []) {
  try {
    const response = await octokit.issues.create({
      owner,
      repo,
      title,
      body,
      labels,
      assignees,
    });
    console.log('Issue created: ', response.data.html_url);
  } catch (error) {
    console.error('Error creating issue: ', error);
  }
}

// Example usage
createIssue(
  'BigOleHealz',
  'ContractAnalyzer',
  'Test Issue',
  'This is a test issue created programmatically.',
  ['bug'],
  ['octocat']
);
