import requests
import os

GITHUB_API_URL = "https://api.github.com"
REPO_OWNER = "your-username"
REPO_NAME = "your-repo"
TOKEN = os.getenv("GITHUB_TOKEN")

def create_issue(title, body):
    url = f"{GITHUB_API_URL}/repos/{REPO_OWNER}/{REPO_NAME}/issues"
    headers = {
        "Authorization": f"token {TOKEN}",
        "Accept": "application/vnd.github.v3+json"
    }
    data = {
        "title": title,
        "body": body
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json()

def close_issue(issue_number):
    url = f"{GITHUB_API_URL}/repos/{REPO_OWNER}/{REPO_NAME}/issues/{issue_number}"
    headers = {
        "Authorization": f"token {TOKEN}",
        "Accept": "application/vnd.github.v3+json"
    }
    data = {
        "state": "closed"
    }
    response = requests.patch(url, headers=headers, json=data)
    return response.json()

# Example usage
# issue = create_issue("Test Issue", "This is a test issue.")
# close_issue(issue["number"])