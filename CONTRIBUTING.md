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

You can run the development server one of two ways:

#### NodeJS

Change directories into `/website` and run `npm run dev`

#### Gradle

Use Gradle via the command line or your IDE to run the Gradle commands inside of `/website`.

Example:

```shell script
./gradlew runSite
```

### Verifying via GitHub Pages Deployment (Optional)

You can test your changes live via a [GitHub Pages](https://pages.github.com/) deployment, which can be useful for demoing changes in a pull request, etc.

From within the `website/` directory, you can run the following command:

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

This command will create a `github-pages` branch and build & commit the documentation output. The `github-pages` branch will then be exposed at `https://YOUR_GITHUB_USERNAME.github.io/PROJECT_BASE_URL`