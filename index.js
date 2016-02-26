/*!
 * bind-context <https://github.com/tunnckoCore/bind-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fnName = require('fn-name')
var define = require('define-property')
var format = require('util').format
var Func = Function // suppress `eslint`, `jshint` and etc

/**
 * > Bind context to a function and preserve her name.
 *
 * **Example**
 *
 * ```js
 * var bindContext = require('bind-context')
 *
 * function get () {
 *   // `this` context is `{foo: 'bar'}`
 *   return this.foo
 * }
 *
 * // just returns same function
 * // as regular `.bind`, but also
 * // preserves the name of given function
 * var _get = bindContext(get, {foo: 'bar'})
 *
 * console.log(_get.name) //=> 'get'
 * console.log(_get()) //=> 'bar'
 * ```
 *
 * @param  {String|Function} `name` Name for the new function or function which to use.
 * @param  {Object|Function=} `fn` Function to bind context to.
 * @param  {Object=} `ctx` The context to pass to function, or `this` is used if set.
 * @return {Function} New function which will have `ctx` bound and correct `.toString`.
 * @api public
 */

module.exports = function bindContext (name, fn, ctx) {
  ctx = typeof fn === 'object' ? fn : ctx
  fn = typeof name === 'function' ? name : fn
  ctx = ctx || this

  if (typeof fn !== 'function') {
    throw new TypeError('bind-context expect a function')
  }

  name = typeof name === 'string' ? name : false
  name = name || fnName(fn) || 'anonymous'

  var str = format('return function %s(){return fn.apply(this,arguments)}', name)
  var func = (new Func('fn', str))(fn.bind(ctx))

  define(func, 'toString', function toString () {
    var named = format('function %s (', name)
    return fn.toString().replace(/^function .*?\(/, named)
  })

  return func
}
