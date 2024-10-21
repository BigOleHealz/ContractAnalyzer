const { Octokit } = require("@octokit/rest");
require('dotenv').config();

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function createTestIssue() {
  try {
    const response = await octokit.issues.create({
      owner: process.env.REPO_OWNER,
      repo: process.env.REPO_NAME,
      title: "Test Issue",
      body: "This is a test issue created by a script.",
    });
    console.log(`Issue created: ${response.data.html_url}`);
  } catch (error) {
    console.error(`Error creating issue: ${error}`);
  }
}

createTestIssue();
