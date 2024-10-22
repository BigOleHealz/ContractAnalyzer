import requests
import os

# Function to create a GitHub issue
def create_github_issue(repo, title, body=None, labels=None, assignees=None):
    url = f"https://api.github.com/repos/{repo}/issues"
    headers = {
        "Authorization": f"token {os.getenv('GITHUB_TOKEN')}",
        "Accept": "application/vnd.github.v3+json"
    }
    issue = {
        "title": title,
        "body": body,
        "labels": labels or [],
        "assignees": assignees or []
    }
    response = requests.post(url, json=issue, headers=headers)
    if response.status_code == 201:
        print(f"Successfully created issue {title}")
    else:
        print(f"Failed to create issue {title}: {response.content}")

# Example usage
if __name__ == "__main__":
    repo_name = "owner/repo"  # Replace with your repository
    issue_title = "Test Issue"
    issue_body = "This is a test issue created by the script."
    issue_labels = ["bug"]
    issue_assignees = ["username"]
    create_github_issue(repo_name, issue_title, issue_body, issue_labels, issue_assignees)
