# Automated Issue Creation

This document provides instructions on how the automated issue creation script works and how to use it.

## Overview

The script located in `scripts/create_issue.js` is designed to create issues programmatically using the GitHub API. This is useful for testing and validating our issue creation workflow.

## Setup

1. **Environment Variables**: Copy the `.env.template` file to `.env` and fill in your GitHub token, repository owner, and repository name.
   ```
   cp scripts/.env.template scripts/.env
   ```

2. **Run the Script**: Execute the script using Node.js.
   ```
   node scripts/create_issue.js
   ```
   Ensure that your environment variables are set correctly to avoid authentication errors.