/*!
 * bind-context <https://github.com/tunnckoCore/bind-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var format = require('util').format
var utils = require('./utils')

/**
 * > Bind context to a function and preserve her name.
 *
 * **Example**
 *
 * ```js
 * var inspect = require('util').inspect
 * var bindContext = require('bind-context')
 *
 * function hello () {
 *   // `this` context is `{foo: 'bar'}`
 *   return this.foo
 * }
 *
 * // just returns same function
 * // as regular `.bind`, but also
 * // preserves the name of given function
 * var hi = bindContext({foo: 'zzz'}, hello, 'bar')
 *
 * console.log(inspect(hi))      // => [Function: bar]
 * console.log(hi)               // => [Function: bar]
 * console.log(hi())             // => 'zzz'
 * console.log(hi.toString())    // => function bar () { ... code ... }
 * console.log(hi.name)          // => 'bar'
 * ```
 *
 * @param  {Object|Function} `ctx` The context to pass bind or function.
 * @param  {Function|String=} `fn` Function to bind context to, or new `name` for it.
 * @param  {String=} `name` Name for the new function (optional, can be used to rename functions).
 * @return {Function} New function which will have `ctx` bound and correct `.toString`.
 * @api public
 */

module.exports = function bindContext (ctx, fn, name) {
  name = typeof fn === 'string' ? fn : name
  fn = typeof ctx === 'function' ? ctx : fn
  ctx = typeof ctx === 'object' ? ctx : this
  name = typeof name === 'string' ? name : false

  if (typeof fn !== 'function') {
    throw new TypeError('bind-context expect a function')
  }
  name = name || utils.name(fn) || 'anonymous'
  name = utils.namify(name)

  var str = format('return function %s(){return fn.apply(this,arguments)}', name)
  var func = (new Function('fn', str))(fn.bind(ctx)) // eslint-disable-line no-new-func

  utils.define(func, 'toString', function toString () {
    var named = format('function %s(', name)
    return fn.toString().replace(/^function .*?\(/, named)
  })

  return func
}
