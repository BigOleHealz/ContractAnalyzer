import unittest
from app import app

class TestCreateIssue(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_create_issue_success(self):
        response = self.app.post('/api/issues',
                                 headers={'Authorization': 'Bearer VALID_TOKEN'},
                                 json={
                                     'title': 'Test Issue',
                                     'description': 'This is a test issue',
                                     'priority': 'high'
                                 })
        self.assertEqual(response.status_code, 201)

    def test_create_issue_missing_auth(self):
        response = self.app.post('/api/issues',
                                 json={
                                     'title': 'Test Issue',
                                     'description': 'This is a test issue',
                                     'priority': 'high'
                                 })
        self.assertEqual(response.status_code, 401)

    def test_create_issue_invalid_data(self):
        response = self.app.post('/api/issues',
                                 headers={'Authorization': 'Bearer VALID_TOKEN'},
                                 json={
                                     'title': 'Test Issue',
                                     'description': 'This is a test issue',
                                     'priority': 'urgent'
                                 })
        self.assertEqual(response.status_code, 400)

if __name__ == '__main__':
    unittest.main()