const axios = require('axios');
require('dotenv').config();

const createIssue = async () => {
  const url = `https://api.github.com/repos/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/issues`;
  const token = process.env.GITHUB_TOKEN;

  const issueData = {
    title: 'Test Issue',
    body: 'This is a test issue created by the automated script.',
  };

  try {
    const response = await axios.post(url, issueData, {
      headers: {
        Authorization: `token ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('Issue created:', response.data.html_url);
  } catch (error) {
    console.error('Error creating issue:', error);
  }
};

createIssue();