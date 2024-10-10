const { Octokit } = require("@octokit/rest");
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
    console.log(`Issue created: ${response.data.html_url}`);
  } catch (error) {
    console.error(`Error creating issue: ${error.message}`);
  }
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 4) {
    console.error("Usage: node create_github_issue.js <owner> <repo> <title> <body> [labels] [assignees]");
    process.exit(1);
  }

  const [owner, repo, title, body, labels, assignees] = args;

  createIssue(
    owner,
    repo,
    title,
    body,
    labels ? labels.split(',') : [],
    assignees ? assignees.split(',') : []
  );
}

main();

// Example usage:
// node create_github_issue.js BigOleHealz ContractAnalyzer "Test Issue" "This is a test issue created programmatically." "bug,help wanted" "username1,username2"

// Note:
// - Ensure you have a .env file with GITHUB_TOKEN set to your personal access token.
// - Labels and assignees are optional and should be comma-separated if provided.
// - This script requires the @octokit/rest package. Install it using npm or yarn.
// - Run `npm install dotenv @octokit/rest` to install the necessary packages.