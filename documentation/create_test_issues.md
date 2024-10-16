# Creating Test Issues Programmatically

This guide explains how to use the script for creating test issues in the repository.

## Prerequisites

1. **GitHub Token**: Ensure you have a GitHub token with the necessary permissions to create issues.
   - Store this token securely and do not expose it in your code.
   - Update your environment variables to include this token.

## Script Usage

The script is located at `src/scripts/create_test_issues.js`.

### Example

```bash
node src/scripts/create_test_issues.js
```

Modify the script to include your repository details and desired issue content.