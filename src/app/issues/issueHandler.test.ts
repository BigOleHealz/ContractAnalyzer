import { filterTestIssues } from './issueHandler';

describe('filterTestIssues', () => {
  it('should filter out issues with the test label', () => {
    const issues = [
      { id: 1, labels: ['bug'] },
      { id: 2, labels: ['test'] },
      { id: 3, labels: ['feature', 'test'] },
      { id: 4, labels: [] }
    ];

    const filteredIssues = filterTestIssues(issues);

    expect(filteredIssues).toEqual([
      { id: 1, labels: ['bug'] },
      { id: 4, labels: [] }
    ]);
  });
});
