const fs = require('fs');

function logIssueDetails(issue) {
  const logMessage = `Issue ID: ${issue.id}, Title: ${issue.title}`;
  fs.appendFileSync('issue_logs.txt', logMessage + '\n');
}

function handleProgrammaticIssue(issue) {
  logIssueDetails(issue);
  // Add more handling logic here
}

module.exports = { handleProgrammaticIssue };
