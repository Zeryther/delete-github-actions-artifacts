# delete-github-actions-artifacts

Artifacts can easily eat up GitHub Actions free tier usage. This script helps you easily clean up all artifacts in a repository to avoid paying.

## Requirements

* Node.js
* NPM
* A GitHub API Token
    * You can create one [here](https://github.com/settings/tokens/new). It is important to set the `repo` scope.

## Installation

```sh
# Clone the repository
git clone https://github.com/Zeryther/delete-github-actions-artifacts

# Install dependencies
npm i
```

## Usage

```sh
# Run the script
node src/index.js

GitHub API Token: ghp_xxxxxxxxxxxxxxxxxx
Repository (ex. organization/name): your/repository
```

The script will discover all artifacts in your repository and delete them.

## Copyright and License

This program was developed and published by [Mehdi Baaboura](https://github.com/Zeryther) under the [MIT License](https://github.com/Zeryther/delete-github-actions-artifacts/blob/master/LICENSE).
