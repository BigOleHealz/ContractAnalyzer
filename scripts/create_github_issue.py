import requests
import os

class GitHubIssueCreator:
    def __init__(self, repo, token):
        self.repo = repo
        self.token = token
        self.api_url = f"https://api.github.com/repos/{repo}/issues"

    def create_issue(self, title, body=None, labels=None, assignees=None):
        headers = {
            'Authorization': f'token {self.token}',
            'Accept': 'application/vnd.github.v3+json'
        }
        issue = {'title': title}
        if body:
            issue['body'] = body
        if labels:
            issue['labels'] = labels
        if assignees:
            issue['assignees'] = assignees

        response = requests.post(self.api_url, json=issue, headers=headers)

        if response.status_code == 201:
            print(f'Successfully created issue {title}')
            return response.json()
        else:
            print(f'Failed to create issue {title}: {response.content}')
            return None

if __name__ == "__main__":
    repo = os.getenv('GITHUB_REPOSITORY')
    token = os.getenv('GITHUB_TOKEN')
    title = "Sample Issue"
    body = "This is a sample issue created programmatically."
    labels = ["bug"]
    assignees = ["octocat"]

    issue_creator = GitHubIssueCreator(repo, token)
    issue_creator.create_issue(title, body, labels, assignees)
