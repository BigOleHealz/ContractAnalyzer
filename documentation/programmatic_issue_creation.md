# Programmatic Issue Creation

This document provides instructions on how to use the script for creating GitHub issues programmatically.

## Setup Requirements

1. **GitHub Personal Access Token (PAT)**: Generate a PAT with `repo` scope to authenticate API requests.
2. **Environment Variables**:
   - `GITHUB_REPOSITORY`: Set this to the repository in the format `owner/repo`.
   - `GITHUB_TOKEN`: Set this to your GitHub PAT.

## Usage Instructions

1. **Script Location**: The script is located at `scripts/create_github_issue.py`.
2. **Running the Script**:
   - Ensure the required environment variables are set.
   - Execute the script using Python: `python scripts/create_github_issue.py`
3. **Input Parameters**:
   - Modify the script to set the `title`, `body`, `labels`, and `assignees` as needed.

## Example

```python
title = "Sample Issue"
body = "This is a sample issue created programmatically."
labels = ["bug"]
assignees = ["octocat"]
```