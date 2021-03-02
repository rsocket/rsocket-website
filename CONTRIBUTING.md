# Contributing

## Getting started

Before you begin:
- This site is powered by [Docusaurus V2](https://v2.docusaurus.io/), which requires [Node JS](https://nodejs.org/en/).

### Ready to make a change? Fork the repo.

Fork using GitHub Desktop:

- [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
- Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

Fork using the command line:

- [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

### Make your changes

Most changes will be expected to be documentation updates in the [markdown docs](/website-docs). If you are changing more than the Markdown documentation pages, then you should be familiar with comfortable with Node JS, Docusaurus, and ReactJS.

Review the [Docusaurus docs](https://v2.docusaurus.io/docs/markdown-features) for how to edit Markdown files.

### Open a pull request

When you're done making changes and you'd like to propose them for review, use open your PR (pull request).

## Development

### Running the development server

You will need to install the [Node.js](https://nodejs.org/en/download/) run time, and then from 
within the root of this directory run the following commands:

    npm install
    npm run start

### Verifying via GitHub Pages Deployment (Optional)

TODO: @flyinprogrammer needs to fix this because it's all garbage once we start using Netlify.
Starting with the fact that PROJECT_BASE_URL will likely become DEPLOY_URL from Netlify, but
what will that value be for contributors or people who want to fork ¯\_(ツ)_/¯

You can test your changes live via a [GitHub Pages](https://pages.github.com/) deployment, 
which can be useful for demoing changes in a pull request, etc.

From within the root directory, you can run the following command:

```shell script
npx cross-env \
  CURRENT_BRANCH=":OUR_BRANCH_NAME" \
  ORGANIZATION_NAME="YOUR_GITHUB_USERNAME" \
  PROJECT_NAME="YOUR_REPOSITORY_FORK_NAME" \
  URL="https://YOUR_GITHUB_USERNAME.github.io/" \
  PROJECT_BASE_URL="YOUR_REPOSITORY_FORK_NAME" \
  GIT_USER="YOUR_GIT_USERNAME" \
  npm run deploy
```

This command will publish the static site into the `docs` directory, you'll then need to commit
it so that the site goes live. Hopefully Netlify will make this unnecessary for us in the near
future.
