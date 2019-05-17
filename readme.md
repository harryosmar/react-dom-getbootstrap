# Getting Started - Guide

## 1. npm init

```
npm init
```

it will create [package.json](https://github.com/harryosmar/es6-guides-getting-started/blob/master/package.json) file.
This file used to configure :
- all package dependencies(dev and prod), version
- script command, we want to run : `npm run SCRIPT-COMMAND`

## 2. install webpack

link : https://webpack.js.org/guides/getting-started

```
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

- new `devDependencies` added to [package.json](https://github.com/harryosmar/es6-guides-getting-started/blob/master/package.json) file.
```json
"devDependencies": {
    "webpack": "^4.31.0",
    "webpack-cli": "^3.3.2"
  }
```
- and [package-lock.json](https://github.com/harryosmar/es6-guides-getting-started/blob/master/package-lock.json) file created.
- folder [node_modules](https://github.com/harryosmar/es6-guides-getting-started/tree/master/node_modules) created, contained all package-dependencies.
- add folder [node_modules](https://github.com/harryosmar/es6-guides-getting-started/blob/master/node_modules) path to [.gitignore](https://github.com/harryosmar/es6-guides-getting-started/blob/master/.gitignore) file.


## 3. create the app dir structure

```
src/
	app.js
dist/
	index.html
	bundle.js
```

- [app.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/src/app.js), has dependency to `lodash` an external libraries.
	- run `npm install --save lodash`
- [bundle.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/dist/build.js) is autogenerated on the build process. [app.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/src/app.js) file will be transpiled the output will become this [bundle.js](https://github.com/harryosmar/es6-guides-getting-started/blob/master/dist/build.js).