/*!
 * bind-context <https://github.com/tunnckoCore/bind-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var util = require('util')
var bindContext = require('./index')

function hello (a) {
  // `this` context is `{foo: 'bar'}`
  return this.foo + (a || '')
}

test('should throw TypeError if not a function', function (done) {
  function fixture () {
    bindContext(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `fn` be function/)
  done()
})

test('should bind passed `ctx` to passed `fn`', function (done) {
  var aa = bindContext({foo: 'aaa'}, hello)

  test.strictEqual(typeof aa, 'function')
  test.strictEqual(util.inspect(aa), '[Function: hello]')
  test.strictEqual(aa(), 'aaa')
  test.strictEqual(aa.toString(), hello.toString())
  test.strictEqual(aa.name, 'hello')
  test.strictEqual(aa.name, hello.name)
  done()
})

test('should bind `ctx` and rename `fn` to passed `name`', function (done) {
  var bb = bindContext({foo: 'boo'}, hello, 'barlo')

  test.strictEqual(typeof bb, 'function')
  test.strictEqual(util.inspect(bb), '[Function: barlo]')
  test.strictEqual(bb(), 'boo')
  test.strictEqual(bb.name, 'barlo')
  test.strictEqual(bb.name !== hello.name, true)

  var helloStr = hello.toString().slice(14)
  var barloStr = bb.toString().slice(14)

  test.strictEqual(barloStr, helloStr)
  done()
})

test('should work to bind context with bindContext.call(ctx, fn)', function (done) {
  var cc = bindContext.call({foo: 'ccc'}, hello)

  test.strictEqual(typeof cc, 'function')
  test.strictEqual(util.inspect(cc), '[Function: hello]')
  test.strictEqual(cc(), 'ccc')
  test.strictEqual(cc.name, 'hello')
  test.strictEqual(cc.name === hello.name, true)

  var hi = hello.toString().slice(14)
  var ci = cc.toString().slice(14)

  test.strictEqual(hi, ci)
  done()
})

test('should work to give a name of anonymous function', function (done) {
  var zz = bindContext(function () {}, 'xxx')

  test.strictEqual(typeof zz, 'function')
  test.strictEqual(util.inspect(zz), '[Function: xxx]')
  test.strictEqual(zz(), undefined)
  test.strictEqual(zz.name, 'xxx')
  done()
})

test('should work for anonymous function', function (done) {
  var ww = bindContext(function () {})

  test.strictEqual(typeof ww, 'function')
  test.strictEqual(util.inspect(ww), '[Function]')
  test.strictEqual(ww(), undefined)
  test.strictEqual(ww.name, '')
  done()
})

test('should have proper .toString method', function (done) {
  function foo () {
    return this.foo ? this.foo : false
  }

  var fn = bindContext({foo: 'bar'}, foo)

  test.equal(typeof fn.toString, 'function')
  test.equal(fn.name, 'foo')
  test.equal(fn(), 'bar')
  test.ok(fn.toString().indexOf('function foo()') !== -1)
  test.ok(fn.toString().indexOf('return this.foo') !== -1)
  done()
})

test('should use previous function context', function (done) {
  var hi = hello.bind({foo: 'fez'})
  var ee = bindContext(hi)

  test.strictEqual(typeof ee, 'function')
  test.strictEqual(util.inspect(ee), '[Function: hello]')
  test.strictEqual(ee(), 'fez')
  test.strictEqual(ee.name, 'hello')
  test.strictEqual(ee.name === hello.name, true)

  var helloStr = hello.toString().slice(14)
  var boundStr = ee.toString().slice(14) // () { [native code] }

  test.notStrictEqual(helloStr, boundStr)
  done()
})
