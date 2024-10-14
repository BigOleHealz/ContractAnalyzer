export async function createIssue(title, body) {
  // Placeholder for issue creation logic
  const newIssue = {
    id: Date.now(),
    title,
    body,
    status: 'open',
    createdAt: new Date().toISOString(),
  };
  // Simulate saving to a database
  console.log('Issue created:', newIssue);
  return newIssue;
}
