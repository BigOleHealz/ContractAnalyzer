# Jira to GitHub Integration

This document outlines the steps to integrate Jira with our GitHub repository by automatically creating GitHub issues from Jira issues.

## Setup Instructions

1. **Jira Webhook Configuration**
   - Go to Jira settings and navigate to Webhooks.
   - Create a new webhook and set the URL to `https://your-domain.com/api/webhooks/jira`.
   - Select the events you want to trigger the webhook, such as issue creation and updates.

2. **Environment Variables**
   - Ensure you have a GitHub personal access token with `repo` scope.
   - Add this token to your environment variables as `GITHUB_TOKEN`.

3. **Security**
   - Optionally, set up a secret in Jira and verify it in the webhook handler to ensure requests are from Jira.
