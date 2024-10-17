const fs = require('fs');
const { handleProgrammaticIssue } = require('./handleProgrammaticIssues');

jest.mock('fs');

describe('handleProgrammaticIssue', () => {
  it('should log issue details', () => {
    const issue = { id: 1, title: 'Test Issue' };
    handleProgrammaticIssue(issue);

    expect(fs.appendFileSync).toHaveBeenCalledWith(
      'issue_logs.txt',
      'Issue ID: 1, Title: Test Issue\n'
    );
  });
});
