# @punkbit/demo-changeset-ci-workflow

A demo TypeScript package for showcasing the changeset-based CI/CD release workflow.

## Overview

This package demonstrates how to use [Changesets](https://github.com/changesets/changesets) for version management and automated releases with GitHub Actions.

## Features

- **Changeset-based versioning**: Track and manage changes incrementally
- **Automated releases**: Create release PRs and publish to NPM automatically
- **Pre-release support**: Support for rc, test, and latest release types
- **ESM only**: Modern ES module exports
- **OIDC trusted publishing**: Secure NPM publishing without long-lived tokens

## Quick Start

### Installation

```bash
npm install @punkbit/demo-changeset-ci-workflow
```

### Usage

```typescript
import { greet, getVersion } from '@punkbit/demo-changeset-ci-workflow';

console.log(greet('World')); // "Hello, World!"
console.log(getVersion());   // Current package version
```

## Development Workflow

### 1. Create a Changeset

When you make changes, create a changeset to document them:

```bash
npx changeset
```

This will:
- Ask about the semver impact (patch, minor, or major)
- Create a markdown file in `.changeset/` describing your changes
- Commit this file with your changes

### 2. Merge to Main

When your PR with the changeset is merged to `main`, the changeset is stored for the next release.

### 3. Create a Release

Go to GitHub Actions → "📦 Create Release" → Run workflow:

- Select release type:
  - `test` - For testing the workflow
  - `rc` - Release candidate with prerelease tag
  - `latest` - Stable production release

This workflow will:
1. Enter/exit pre-release mode if needed
2. Consume all changesets and update version
3. Generate CHANGELOG.md
4. Create a release branch and PR
5. Create a git tag

### 4. Merge the Release PR

When the release PR is merged, the "🚀 Release Publisher" workflow automatically:
1. Publishes to NPM
2. Creates a GitHub Release with changelog
3. Tags the release

## GitHub Setup Instructions

### 1. Create the GitHub Repository

1. Go to https://github.com/new
2. Name: `demo-changeset-ci-workflow`
3. Make it public (for easier NPM publishing)
4. Don't initialize with README (we have our own)
5. Click "Create repository"

### 2. Push Your Code

```bash
cd /Users/punkbit/www/punkbit/clickhouse/demo-changeset-ci-workflow

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: changeset-based release workflow demo"

# Add remote and push
git remote add origin https://github.com/punkbit/demo-changeset-ci-workflow.git
git branch -M main
git push -u origin main
```

### 3. Configure NPM Publishing (OIDC)

1. Go to https://www.npmjs.com/settings/punkbit/tokens
2. Click "Generate New Token" → "Granular Access Token"
3. Give it a name like "GitHub Actions - demo-changeset-ci-workflow"
4. Set expiration as needed
5. Select packages: Add `@punkbit/demo-changeset-ci-workflow`
6. Permissions: Read and Write
7. Copy the token

### 4. Add NPM Token to GitHub Secrets

1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: Paste the NPM token from step 3
5. Click "Add secret"

### 5. Configure Branch Protection (Recommended)

1. Go to Settings → Branches
2. Click "Add rule"
3. Branch name pattern: `main`
4. Enable:
   - "Require a pull request before merging"
   - "Require status checks to pass"
   - "Require conversation resolution before merging"
5. Click "Create"

## Testing the Workflow

### 1. Create a Test Changeset

```bash
npx changeset
# Select 'patch' for a simple change
# Write: "Added a friendly greeting function"
```

### 2. Commit and Push

```bash
git add .
git commit -m "feat: add greeting function with changeset"
git push origin main
```

### 3. Create a Test Release

1. Go to GitHub → Actions → "📦 Create Release"
2. Click "Run workflow"
3. Select `test` as release type
4. Click "Run workflow"

### 4. Merge the Release PR

The workflow will create a PR. Review and merge it to trigger publishing.

## Package.json Scripts

- `npm run build` - Compile TypeScript
- `npm run changeset:add` - Create a new changeset
- `npm run changeset:status` - Check changeset status
- `npm run changeset:version` - Update versions and changelog

## Learn More

- [Changesets Documentation](https://github.com/changesets/changesets)
- [NPM Provenance](https://docs.npmjs.com/generating-provenance-statements)
- [GitHub OIDC Trust](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)

## License

MIT
