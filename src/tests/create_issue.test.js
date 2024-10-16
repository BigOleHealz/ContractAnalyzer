const createIssue = require('../../scripts/create_issue');
const axios = require('axios');
jest.mock('axios');

describe('createIssue', () => {
  it('should create an issue successfully', async () => {
    const mockResponse = { data: { html_url: 'http://github.com/issue/1' } };
    axios.post.mockResolvedValue(mockResponse);

    console.log = jest.fn();
    await createIssue('Test Issue', 'This is a test issue.');

    expect(axios.post).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Issue created:', 'http://github.com/issue/1');
  });

  it('should handle errors', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));
    console.error = jest.fn();
    await createIssue('Test Issue', 'This is a test issue.');
    expect(console.error).toHaveBeenCalledWith('Error creating issue:', expect.any(Error));
  });
});
