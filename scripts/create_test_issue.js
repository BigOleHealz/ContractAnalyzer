const axios = require('axios');
require('dotenv').config();

const createTestIssue = async (title, body, labels) => {
  const url = `https://api.github.com/repos/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/issues`;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json'
  };

  const data = {
    title: title,
    body: body,
    labels: labels
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log(`Issue created: ${response.data.html_url}`);
  } catch (error) {
    console.error(`Error creating issue: ${error.message}`);
  }
};

const args = process.argv.slice(2);
const title = args[0] || 'Test Issue';
const body = args[1] || 'This is a test issue created by a script.';
const labels = args.slice(2) || [];

createTestIssue(title, body, labels);

module.exports = createTestIssue;
