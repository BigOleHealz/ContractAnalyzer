const { Octokit } = require('@octokit/rest');

async function createTestIssue(owner, repo, title, body) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  try {
    const response = await octokit.issues.create({
      owner,
      repo,
      title,
      body,
    });
    console.log(`Issue created: ${response.data.html_url}`);
  } catch (error) {
    console.error(`Error creating issue: ${error}`);
  }
}

// Example usage
createTestIssue(
  'owner-name',
  'repo-name',
  'Test Issue Title',
  'This is a test issue created programmatically.'
);