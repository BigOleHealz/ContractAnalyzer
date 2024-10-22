# GitHub Issue Creation Script

This script allows you to programmatically create issues in a GitHub repository using the GitHub REST API.

## Prerequisites

- Python 3.x
- `requests` library
- A GitHub personal access token with `repo` scope

## Usage

1. Set your GitHub token as an environment variable:
   ```bash
   export GITHUB_TOKEN=your_personal_access_token
   ```

2. Run the script:
   ```bash
   python scripts/create_github_issue.py
   ```
   Modify the example usage section in the script to customize the repository, issue title, body, labels, and assignees.
