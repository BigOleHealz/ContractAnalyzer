# Jira to GitHub Integration

This project includes a webhook endpoint that receives requests from Jira and automatically creates corresponding GitHub issues based on the Jira tickets received.

## Setup Instructions

1. **Environment Variables**: Create a `.env` file in the root of your project and add the following variables:
   ```
   GITHUB_TOKEN=your_github_personal_access_token
   JIRA_SECRET=your_jira_webhook_secret
   ```

2. **Jira Webhook Configuration**: In your Jira instance, set up a webhook to send issue events to your deployed endpoint at `/api/jira-webhook`.

3. **GitHub Repository**: Ensure the GitHub repository where issues will be created is accessible and the provided token has the necessary permissions.

## Running the Project

To run the project locally, use:
```
<div style="background: black;">
<p align="center" style="margin: 0;">
  <a href="https://dev.marblism.com" target="blank">
    <img src="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/marblism-logo.png" height="150" alt="Marblism Logo" />
  </a>
</p>
<h1 align="center" style="margin: 0;">In Marble We Trust</h1>

<a  style="margin: 0;" target="_blank" href="https://marblism.com">
<p align="center" style="margin: 0; letter-spacing: 3px;
text-decoration: none;">
marblism
</p>
</a>
</div>
<div style="height: 50px; background: linear-gradient(#000000, transparent);"></div>

## Documentation

Learn more in the [official documentation](https://dev.marblism.com).

## Installation

<div style="color: red;">

> ⚠️ **Important**<br/>Make sure the following tools are installed on your computer

<p align="center">

<a target="_blank" href="https://www.docker.com/get-started/">![Docker Desktop Version](https://img.shields.io/badge/Docker%20Desktop-4.19.0-black?logo=docker)</a>
<a target="_blank" href="https://nodejs.org/en">![Node.js version](https://img.shields.io/badge/Node.js-20.11.0-black?logo=nodedotjs)</a>
<a target="_blank" href="https://www.npmjs.com/">![npm Version](https://img.shields.io/badge/npm-10.2.4-black?logo=npm)</a>

</p>
</div>

<br />

```bash
$ pnpm run init
```

## Development

```bash
$ pnpm run dev
```

[View your application in your browser](http://localhost:8099)

## Production

```bash
$ pnpm run build
$ pnpm run start
```

## Support

We reply FAST on our <a target="_blank" href="https://discord.gg/GScNz7kAEu">Discord server</a>.

## Stay in touch

[@marblismAI](https://twitter.com/marblismAI)
