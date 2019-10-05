# Electron + React + Typescript

#### This repository takes reference from the [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate).

## Install
Clone the repo:

```
git clone --depth 1 --single-branch --branch master https://github.com/hank121314/Electron-react-typescript-template.git your-project-name
```

And install the dependencies.

```
cd your-project-name
yarn
```

## Starting Development
Start the app in the dev environment. This starts the renderer process in [hot-module-replacement](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

`
yarn dev
`

And if you want to debug the production mode.

`
yarn start
`


## Packaging for Production
To package apps for the local platform:

`
yarn package
`


## Branch of repository

```
Electron + React + Typescript
├── only-electron-react-typescript // only contains minimum requirement for electron-react-typescript
├── electron-react-typescript-scss // add scss integration
└── electron-react-typescript-scss-material-design // add material design and Roboto fonts
```
