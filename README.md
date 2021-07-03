# Monorepo Example

![ci](https://github.com/romelperez/monorepo-example-lerna-yarn-ts-sass-webpack/workflows/ci/badge.svg)

A monorepo example private project with the following technologies and tools:

- [Node.js](https://nodejs.org) v14+
- [Yarn](https://yarnpkg.com) v1.22+
- [Lerna](https://lerna.js.org) v4+
- [Webpack](https://eslint.org) v5.42+
- [TypeScript](https://www.typescriptlang.org) v4.3+
- [SASS](https://sass-lang.com) v1.30+
- [ESLint](https://eslint.org) v7.30+
- [StyleLint](https://stylelint.io) v13+
- [Jest](https://jestjs.io) v27+

See [production website preview](https://romelperez-monorepo-example-lerna-yarn-ts-sass-webpack.netlify.app).

## Setup

Install global dependencies:

- [Node.js](https://nodejs.org) v14+
- [Yarn](https://yarnpkg.com) v1.22+

Install project dependencies:

```bash
yarn install
```

## Develop

```bash
cd packages/website
yarn dev
```

## Build and Deploy

```bash
cd packages/website
yarn build
yarn serve
```
