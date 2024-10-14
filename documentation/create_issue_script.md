# Create Issue Script

This document provides instructions on how to use the script to create GitHub issues programmatically using the GitHub API.

## Usage

1. **Set Up Authentication**:
   - Obtain a GitHub personal access token (PAT) and set it in the `.env` file using the `GITHUB_TOKEN` variable.

2. **Run the Script**:
   - Navigate to the `scripts` directory.
   - Run the script using Node.js:
     ```bash
     node create_issue.js
     ```
   - The script will create an issue in the specified repository with the provided details.

## Integration

- The script can be integrated into CI/CD pipelines or other automation workflows to create issues based on specific triggers or conditions.
