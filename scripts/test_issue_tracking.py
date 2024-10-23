import unittest

class TestIssueTrackingSystem(unittest.TestCase):
    def test_create_issue(self):
        # Simulate creating an issue
        issue = create_issue("Test Issue", "This is a test issue.")
        self.assertIsNotNone(issue)
        self.assertEqual(issue.title, "Test Issue")

    def test_resolve_issue(self):
        # Simulate resolving an issue
        issue = create_issue("Test Issue", "This is a test issue.")
        resolve_issue(issue)
        self.assertTrue(issue.is_resolved)

if __name__ == '__main__':
    unittest.main()
