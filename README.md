# Luk4h's Fullstack turborepo template
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

This is an unofficial starter Turborepo with a template backend using Express and frontend with Vite all working in harmony sharing Google's opionated eslint, prettier and tsconfig configurations.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `web`: a [Vite](https://vitejs.dev/) app
- `eslint-config`: ESLint configurations
- `tsconfig`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
gh repo clone luk4h/fullstack-turbo-template
cd fullstack-turbo-template
pnpm install
git init . && git add . && git commit -m "Init"
```
