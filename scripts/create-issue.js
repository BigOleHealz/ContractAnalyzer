const axios = require('axios');
require('dotenv').config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'your-repo-owner'; // Replace with your repo owner
const REPO_NAME = 'your-repo-name'; // Replace with your repo name

if (!GITHUB_TOKEN) {
  console.error('Error: GITHUB_TOKEN is not set. Please set it in your environment variables.');
  process.exit(1);
}

async function createIssue(title, body, labels = [], assignees = [], milestone = null) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`;
  const headers = {
    'Authorization': `token ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
  };
  const data = {
    title,
    body,
    labels,
    assignees,
    milestone
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Issue created successfully:', response.data.html_url);
  } catch (error) {
    console.error('Error creating issue:', error.response ? error.response.data : error.message);
  }
}

const args = process.argv.slice(2);
const [title, body, labels, assignees, milestone] = args;

if (!title || !body) {
  console.error('Usage: node create-issue.js <title> <body> [labels] [assignees] [milestone]');
  process.exit(1);
}

createIssue(
  title,
  body,
  labels ? labels.split(',') : [],
  assignees ? assignees.split(',') : [],
  milestone || null
);

module.exports = createIssue;
