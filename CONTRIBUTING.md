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

Most changes will be expected to be documentation updates in the [markdown docs](/content-docs). If you are changing
more than the Markdown documentation pages, then you should be familiar and comfortable with Node JS, Docusaurus,
and ReactJS.

Review the [Docusaurus docs](https://docusaurus.io/docs/markdown-features) for how to edit Markdown files.

### Open a pull request

Once you are done pushing changes to your fork, then you'll need to open a pull request (PR) to propose them for review.
Inside the PR a Netlify bot will create some Github Checks. Those checks include building and deploy your site to a temporary
domain so that you may preview them before they go live.

The `Pages changed - rsocket` check will show you a list of pages Netlify has detected as changing; this can make it
easy to verify only the pages you've edited. It might also list pages you didn't edit, and that's ok. We will all work
together to ensure only your changes will impact our website.

Similarly, the `netlify/rsocket/deploy-preview` check will take you to the root of the temporary domain so that you can
validate the entire site.

Once you've validated your changes feel free to let us know in a comment or edit your initial comment of the PR.
We should be able to review and merge it quickly.

## Development

### Running the development server

You will need to install the [Node.js](https://nodejs.org/en/download/) runtime, and then from
within the root of this directory run the following commands:

```shell script
npm install
npm run start
```

### Forking and Publishing (Likely unnecessary)

You can test your changes or fork and host this site via a [GitHub Pages](https://pages.github.com/) deployment,
which can be useful for demoing large, Earth-shattering changes in a PR.

From within the root directory, you can run the following command:

```shell script
npx cross-env \
  ORGANIZATION_NAME="YOUR_GITHUB_USERNAME" \
  PROJECT_NAME="YOUR_REPOSITORY_FORK_NAME" \
  DEPLOY_URL="https://YOUR_GITHUB_USERNAME.github.io/" \
  PROJECT_BASE_URL="YOUR_REPOSITORY_FORK_NAME" \
  GIT_USER="YOUR_GIT_USERNAME" \
  npm run deploy
```

In a lot of cases `ORGANIZATION_NAME` and `GIT_USER` will be the same value: your GitHub username, and similarly,
`PROJECT_NAME` and `PROJECT_BASE_URL` will be the same: `rsocket-website`.

These environment variables come from
[Docusaurus v2 deployment guide](https://v2.docusaurus.io/docs/deployment/), or can be found as shims inside
[docusaurus.config.js](docusaurus.config.js).

The `npm run deploy` command will publish the static site into the `./docs` directory, you'll then need to commit
it so that the site goes live:

```shell script
git add --all
git commit -m "your change"
git push origin $OUR_BRANCH_NAME
```

We use the `docs` folder instead of a branch because long ago we made that decision. If it serves you better to do a
`gh-pages` [branch deployment](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
or to use the native Docusaurus v2 `deploy` [command](https://v2.docusaurus.io/docs/cli/#docusaurus-deploy), go for it!
