# [bind-context][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Bind context to the given function and preserves her name. Or set new name of the given function. It also handles `.toString` correctly.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i bind-context --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var bindContext = require('bind-context')

function get () {
  // this context is {foo: 'bar'}
  return this.foo
}

// just returns same function
// as regular `.bind`, but also
// preserves the name of given function 
var _get = bindContext(get, {foo: 'bar'})

console.log(_get.name) //=> 'get'
console.log(_get()) //=> 'bar'
```

Whole problem and idea behind that packages is that `.bind`, `.apply` and `.call` native
methods eats the name of given function. With that package the name property is preserved
and also you can use it to set new name.

**Example**

```js
var bindContext = require('bind-context')

function app () {}
var _app = bindContext('custom', app)

console.log(_app.name) //=> 'custom'
```


## Related
- [benz](https://github.com/tunnckocore/benz): Compose your control flow with absolute elegance. Support async/await, callbacks,… [more](https://github.com/tunnckocore/benz)
- [fn.name](https://github.com/bigpipe/fn.name): Extract names from functions
- [useware](https://github.com/tunnckocore/useware): Accept Arguments object or multiple arguments that can be any… [more](https://github.com/tunnckocore/useware)
- [vez](https://github.com/tunnckocore/vez): Middleware composition at new level. Ultimate alternative to `ware`, `plugins`,… [more](https://github.com/tunnckocore/vez)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/bind-context/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/bind-context
[npmjs-img]: https://img.shields.io/npm/v/bind-context.svg?label=bind-context

[license-url]: https://github.com/tunnckoCore/bind-context/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/bind-context
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/bind-context.svg

[travis-url]: https://travis-ci.org/tunnckoCore/bind-context/branches
[travis-img]: https://img.shields.io/travis/tunnckoCore/bind-context/latest-1.svg

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

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
