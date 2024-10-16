const axios = require('axios');
require('dotenv').config();

const createIssue = async (title, body) => {
  const url = `https://api.github.com/repos/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/issues`;
  const headers = {
    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
  };
  const data = {
    title,
    body
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Issue created:', response.data.html_url);
  } catch (error) {
    console.error('Error creating issue:', error);
  }
};

module.exports = createIssue;

// Usage example:
// createIssue('Issue Title', 'Issue description body.');
