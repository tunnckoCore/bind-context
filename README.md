# [bind-context][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Bind context to a function and preserves her name. Can be used to change name of a function. The toString also works correctly.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i bind-context --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const bindContext = require('bind-context')
```

### [bindContext](index.js#L45)
> Bind context to a function and preserve her name.

**Params**

* `ctx` **{Object|Function}**: The context to pass bind or function.    
* `fn` **{Function|String=}**: Function to bind context to, or new `name` for it.    
* `name` **{String=}**: Name for the new function (optional, can be used to rename functions).    
* `returns` **{Function}**: New function which will have `ctx` bound and correct `.toString`.  

**Example**

```js
var inspect = require('util').inspect
var bindContext = require('bind-context')

function hello () {
  // `this` context is `{foo: 'bar'}`
  return this.foo
}

// just returns same function
// as regular `.bind`, but also
// preserves the name of given function
var hi = bindContext({foo: 'zzz'}, hello, 'bar')

console.log(inspect(hi))      // => [Function: bar]
console.log(hi)               // => [Function: bar]
console.log(hi())             // => 'zzz'
console.log(hi.toString())    // => function bar () { ... code ... }
console.log(hi.name)          // => 'bar'
```

## Signatures

```js
bindContext.call(Object, Function)          // preserves name
bindContext.call(Object, Function, String)  // changes name

bindContext(Object, Function)          // preserves name (with context)
bindContext(Object, Function, String)  // changes name (with context)

bindContext(Function)          // preserves name (no context, saves Function's context if it has)
bindContext(Function, String)  // changes name (no context, saves Function's context if it has)
```

## Related
* [function-arguments](https://www.npmjs.com/package/function-arguments): Get arguments of a function, useful for and used in dependency… [more](https://www.npmjs.com/package/function-arguments) | [homepage](https://github.com/tunnckocore/function-arguments)
* [function-equal](https://www.npmjs.com/package/function-equal): Compares two functions, are they equal? Checks their names, bodies and… [more](https://www.npmjs.com/package/function-equal) | [homepage](https://github.com/tunnckocore/function-equal)
* [get-fn-name](https://www.npmjs.com/package/get-fn-name): Get function name with strictness and correctness in mind. Also works… [more](https://www.npmjs.com/package/get-fn-name) | [homepage](https://github.com/tunnckocore/get-fn-name)
* [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name,… [more](https://www.npmjs.com/package/parse-function) | [homepage](https://github.com/tunnckocore/parse-function)
* [rename-function](https://www.npmjs.com/package/rename-function): Rename a given function. Tries to be cross-platform and guaranteed. Useful… [more](https://www.npmjs.com/package/rename-function) | [homepage](https://github.com/tunnckocore/rename-function)
* [smart-bind](https://www.npmjs.com/package/smart-bind): Smarter binding of function with some context. It uses .apply instead… [more](https://www.npmjs.com/package/smart-bind) | [homepage](https://github.com/tunnckocore/smart-bind)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/bind-context/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[rename-function]: https://github.com/tunnckocore/rename-function

[npmjs-url]: https://www.npmjs.com/package/bind-context
[npmjs-img]: https://img.shields.io/npm/v/bind-context.svg?label=bind-context

[license-url]: https://github.com/tunnckoCore/bind-context/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/bind-context
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/bind-context.svg

[travis-url]: https://travis-ci.org/tunnckoCore/bind-context
[travis-img]: https://img.shields.io/travis/tunnckoCore/bind-context/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/bind-context
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/bind-context.svg

[david-url]: https://david-dm.org/tunnckoCore/bind-context
[david-img]: https://img.shields.io/david/tunnckoCore/bind-context.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

