/*!
 * bind-context <https://github.com/tunnckoCore/bind-context>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fnName = require('fn.name')
var format = require('util').format
var Func = Function // suppress `eslint`, `jshint` and etc

module.exports = function bindContext (name, fn, ctx) {
  ctx = typeof fn === 'object' ? fn : ctx
  fn = typeof name === 'function' ? name : fn
  ctx = ctx || this

  if (typeof fn !== 'function') {
    throw new TypeError('bind-context expect a function')
  }

  name = typeof name === 'string' ? name : false
  name = name || fnName(fn)

  var str = format('return function %s(){return fn.apply(this,arguments)}', name)
  var func = (new Func('fn', str))(fn.bind(ctx))

  func.toString = function toString () {
    var named = format('function %s (', name)
    return fn.toString().replace(/^function .*?\(/, named)
  }

  return func
}
