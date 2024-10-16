import unittest
from unittest.mock import patch
from scripts.create_issue import create_github_issue

class TestCreateIssue(unittest.TestCase):

    @patch('scripts.create_issue.requests.post')
    def test_create_issue_success(self, mock_post):
        mock_post.return_value.status_code = 201
        response = create_github_issue('user/repo', 'Test Issue')
        self.assertEqual(response.status_code, 201)

    @patch('scripts.create_issue.requests.post')
    def test_create_issue_failure(self, mock_post):
        mock_post.return_value.status_code = 400
        response = create_github_issue('user/repo', 'Test Issue')
        self.assertEqual(response.status_code, 400)

if __name__ == '__main__':
    unittest.main()