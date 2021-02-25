# RSocket Website

Builds and deploys the [rsocket.io](http://rsocket.io) website hosted on GitHub Pages.

## CI/CD

The website will build and deploy automatically via a GitHub action with commits to the `master` branch.

## Building the Site

Run the following command to build the site:

    ./gradlew clean buildSite

## Serving the Site Locally

To view website changes locally before committing to Github, run the following command:

    ./gradlew runSite

## Deploying the Site to GitHub Pages

Follow the steps below to build the site and deploy it to GitHub pages:

1.  Run the following command to build the site and stage it for release:

        ./gradlew deploySite

    If successful, this command will generate the static website and put the contents into the `docs` folder.

2.  Commit the changes to the `master` branch in GitHub.

## Bugs and Feedback

For bugs, questions, and discussions please use the [Github Issues](https://github.com/rsocket/rsocket.github.io/issues).

## Contributing

All contributions are welcome! Please see [Contributing](CONTRIBUTING.md) to get started.

## License

Copyright 2018 - Present the original author or authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
