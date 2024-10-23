import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const createGitHubIssue = async (owner: string, repo: string, title: string, body: string, labels: string[]) => {
  try {
    const response = await octokit.issues.create({
      owner,
      repo,
      title,
      body,
      labels,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create GitHub issue: ${error}`);
  }
};
