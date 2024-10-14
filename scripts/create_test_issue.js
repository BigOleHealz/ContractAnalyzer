const axios = require('axios');

async function createTestIssue() {
  const owner = 'BigOleHealz';
  const repo = 'ContractAnalyzer';
  const title = 'Test Issue';
  const body = 'This is a test issue created programmatically.';
  const token = process.env.GITHUB_TOKEN;

  try {
    const response = await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/issues`,
      { title, body },
      { headers: { Authorization: `token ${token}` } }
    );
    console.log('Issue created:', response.data.html_url);
  } catch (error) {
    console.error('Error creating issue:', error);
  }
}

createTestIssue();