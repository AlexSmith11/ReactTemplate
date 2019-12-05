# React Template

A project template for new React Applications.

## Commands

Commands live in the "scripts" portion of the package.json, they can be invoked
using Yarn like so.

```sh
# Build the application once
$ yarn build

# Build the application, rebuild it on any change
$ yarn build:watch

# Build the application in production mode
$ yarn build:prod

# Build the application, rebuild it on any change and hot reload the browser.
# http://localhost:5656
$ yarn serve

# Run the tests once
$ yarn test

# Re-run the tests on any changes
$ yarn test:watch

# Get a code coverage report
$ yarn test:coverage
```

## Features

- Enforced Style Guide, code is formatted on commit.
- [Webpack]: Build Tool - Compiles our modern JS into more compatible JS.
- [Axios]: Promise based Request Library, works everywhere.
- [React]: Component based view layer.
- [Redux]: State container, keep just about everything in here.
- [Thunk]: Middleware for Redux. With this we can write async actions.
- [Moment]: Date/Time Library
- [Query-String]: Don't make your own gross querystrings, use this.
- [Stable]: JS sort is not guaranteed to return stable results, use this instead.
- [Sass]: Stylesheets are applied per-component and are written in sass/scss

[axios]: https://github.com/axios/axios
[webpack]: https://webpack.js.org/
[javascript standard style]: https://standardjs.com/
[react]: https://reactjs.org/
[redux]: http://redux.js.org/
[thunk]: https://github.com/gaearon/redux-thunk
[moment]: https://momentjs.com/
[query-string]: https://github.com/sindresorhus/query-string
[stable]: https://github.com/Two-Screen/stable
[sass]: https://sass-lang.com/
