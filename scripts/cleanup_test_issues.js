const axios = require('axios');
require('dotenv').config();

const closeTestIssues = async () => {
  const url = `https://api.github.com/repos/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/issues`;
  const token = process.env.GITHUB_TOKEN;

  const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github.v3+json'
  };

  try {
    const response = await axios.get(url, { headers });
    const issues = response.data;

    for (const issue of issues) {
      if (issue.title.includes('Automated Test Issue')) {
        const closeUrl = `${url}/${issue.number}`;
        await axios.patch(closeUrl, { state: 'closed' }, { headers });
        console.log(`Closed issue: ${issue.html_url}`);
      }
    }
  } catch (error) {
    console.error(`Error closing issues: ${error.message}`);
  }
};

closeTestIssues();

module.exports = closeTestIssues;
