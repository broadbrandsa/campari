# Deployment

## Prerequisites

- GitHub repository with the project pushed to `main`
- Vercel account linked to the GitHub organization or user

## Vercel Project Setup

1. Import the repository in the Vercel dashboard.
2. Configure the following settings:

| Setting            | Value                              |
| ------------------ | ---------------------------------- |
| Framework preset   | Next.js                            |
| Root directory     | Project root (leave as default)    |
| Build command      | `pnpm build`                       |
| Install command    | `pnpm install`                     |
| Output directory   | Leave blank (Next.js default)      |

3. No `vercel.json` file is required.

## Environment Variables

None required for the base deployment.

## Redeployment

Push to the `main` branch to trigger an automatic deploy via Vercel's GitHub integration.

## Custom Domain

Configure in **Vercel project settings > Domains**. Add the desired domain and update DNS records as instructed by Vercel.
