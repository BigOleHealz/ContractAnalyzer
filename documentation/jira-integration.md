# Jira to GitHub Integration Documentation

This document provides detailed instructions on setting up and maintaining the Jira to GitHub integration.

## Prerequisites

1. **GitHub Personal Access Token**: Create a token with `repo` scope to allow issue creation.
2. **Jira Webhook Secret**: Generate a secret token to secure your webhook endpoint.

## Setup Instructions

1. **Environment Variables**:
   - Add `GITHUB_TOKEN` and `JIRA_SECRET` to your `.env` file.

2. **Jira Configuration**:
   - Navigate to Jira settings and create a webhook.
   - Set the URL to your server's endpoint `/api/jira-webhook`.
   - Select events you want to listen to, such as issue creation or updates.

3. **GitHub Repository**:
   - Ensure the repository is accessible with the provided token.

## Security

Ensure that the `JIRA_SECRET` is kept confidential and validate it in the webhook handler to prevent unauthorized access.

## Troubleshooting

Check logs for any errors and ensure all environment variables are correctly set.
