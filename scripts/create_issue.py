import os
import requests

def create_github_issue(repo, title, body=None, labels=None):
    token = os.getenv('GITHUB_TOKEN')
    if not token:
        raise ValueError('GITHUB_TOKEN is not set in environment variables')

    url = f'https://api.github.com/repos/{repo}/issues'
    headers = {'Authorization': f'token {token}'}
    data = {'title': title, 'body': body, 'labels': labels}

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 201:
        print('Successfully created issue')
    else:
        print(f'Failed to create issue: {response.content}')

    return response.json()