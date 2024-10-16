const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function createTestIssue() {
  try {
    const response = await octokit.issues.create({
      owner: "your-username",
      repo: "your-repo",
      title: "Test Issue",
      body: "This is a test issue created programmatically.",
    });
    console.log("Issue created: ", response.data.html_url);
  } catch (error) {
    console.error("Error creating issue: ", error);
  }
}

createTestIssue();