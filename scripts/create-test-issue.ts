import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function createTestIssue() {
  const { data } = await octokit.issues.create({
    owner: 'BigOleHealz',
    repo: 'ContractAnalyzer',
    title: 'Test Issue',
    body: 'This is a test issue created programmatically.'
  });
  console.log(`Created issue #${data.number}`);
}

createTestIssue();