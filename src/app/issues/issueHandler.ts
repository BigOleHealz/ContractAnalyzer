export function filterTestIssues(issues) {
  return issues.filter(issue => !issue.labels.includes('test'));
}

// Example usage
const allIssues = getAllIssues(); // Assume this function fetches all issues
const realIssues = filterTestIssues(allIssues);

console.log('Real Issues:', realIssues);
// Proceed with handling real issues only