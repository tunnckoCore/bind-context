/*!
 * bind-context <https://github.com/tunnckoCore/bind-context>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

// var test = require('assertit')
var bindContext = require('./index')
var util = require('util')

function hello () {
  // `this` context is `{foo: 'bar'}`
  return this.foo
}

function Cls () {
  if (!(this instanceof Cls)) {
    return new Cls()
  }
  return this.foo
}

var aa = bindContext({foo: 'aaa'}, hello)
var bb = bindContext({foo: 'bbb'}, hello, 'foo')

var cc = bindContext.call({foo: 'ccc'}, hello)
var dd = bindContext.call({foo: 'ddd'}, hello, 'bar')

var hi = hello.bind({foo: 'zaz'})
var ee = bindContext(hi)         // if function have some ctx, use it

var by = hello.bind({foo: 'bay'})
var ff = bindContext(by, 'qux')  // if function have some ctx, use it

var gy = Cls
var gg = bindContext(gy, 'gaz')

var zz = bindContext(function () {}, 'xxx')

var ww = bindContext(function () {})

/**
 * Examples
 */

console.log('===== aa')

console.log(util.inspect(aa)) // => [Function: hello]
console.log(aa)               // => [Function: hello]
console.log(aa())             // => 'aaa'
console.log(aa.toString())    // =>
console.log(aa.name)          // => 'hello'

console.log('===== bb')

console.log(util.inspect(bb)) // => [Function: foo]
console.log(bb)               // => [Function: foo]
console.log(bb())             // => 'bbb'
console.log(bb.toString())    // =>
console.log(bb.name)          // => 'foo'

console.log('===== cc')

console.log(util.inspect(cc)) // => [Function: hello]
console.log(cc)               // => [Function: hello]
console.log(cc())             // => 'ccc'
console.log(cc.toString())    // =>
console.log(cc.name)          // => 'hello'

console.log('===== dd')

console.log(util.inspect(dd)) // => [Function: bar]
console.log(dd)               // => [Function: bar]
console.log(dd())             // => 'ddd'
console.log(dd.toString())    // =>
console.log(dd.name)          // => 'bar'

console.log('===== ee')

console.log(util.inspect(ee)) // => [Function: hello]
console.log(ee)               // => [Function: hello]
console.log(ee())             // => 'zaz'
console.log(ee.toString())    // =>
console.log(ee.name)          // => 'hello'

console.log('===== ff ')

console.log(util.inspect(ff)) // => [Function: qux]
console.log(ff)               // => [Function: qux]
console.log(ff())             // => 'bay'
console.log(ff.toString())    // =>
console.log(ff.name)          // => 'qux'

console.log('===== gg')

console.log(util.inspect(gg)) // => [Function: gaz]
console.log(gg)               // => [Function: gaz]
console.log(gg())             // => 'Cls {}'
console.log(gg.toString())    // =>
console.log(gg.name)          // => 'gaz'

console.log('===== zz')

console.log(util.inspect(zz)) // => [Function: xxx]
console.log(zz)               // => [Function: xxx]
console.log(zz())             // => undefined
console.log(zz.toString())    // => function xxx () {}
console.log(zz.name)          // => 'xxx'

console.log('===== ww')

console.log(util.inspect(ww)) // => [Function: anonymous]
console.log(ww)               // => [Function: anonymous]
console.log(ww())             // => undefined
console.log(ww.toString())    // => function anonymous () {}
console.log(ww.name)          // => 'anonymous'

/**
 * Old tests
 */

// test('should throw TypeError if not function', function (done) {
//   function fixture () {
//     bindContext(123)
//   }

//   test.throws(fixture, TypeError)
//   test.throws(fixture, /expect a function/)
//   done()
// })

// test('should throw TypeError if name and context only', function (done) {
//   function fixture () {
//     bindContext('foo', {bar: 'baz'})
//   }

//   test.throws(fixture, TypeError)
//   test.throws(fixture, /expect a function/)
//   done()
// })

// test('should accept only function and preserve original name', function (done) {
//   function fn1 () {
//     test.deepEqual(this, {foo: 'bar'})
//     return this.foo
//   }

//   var fn = bindContext.call({foo: 'bar'}, fn1)
//   var actual = fn()
//   var expected = 'bar'

//   test.equal(actual, expected)
//   test.equal(fn.name, 'fn1')
//   done()
// })

// test('should accept name and function (change original name)', function (done) {
//   function fn1 () {
//     test.deepEqual(this, {a: 'b'})
//     return this.a
//   }

//   var fn = bindContext.call({a: 'b'}, 'foobar', fn1)
//   var actual = fn()
//   var expected = 'b'

//   test.equal(actual, expected)
//   test.equal(fn.name, 'foobar')
//   done()
// })

// test('should just change name of given function without setting context', function (done) {
//   function app () {
//     test.equal(this, undefined)
//     return 'abc'
//   }

//   var fn = bindContext('custom', app)
//   test.equal(typeof fn, 'function')
//   test.equal(typeof fn.toString, 'function')
//   test.equal(fn.name, 'custom')
//   test.equal(fn(), 'abc')
//   done()
// })

// test('should accept name, fn and context as 3rd argument', function (done) {
//   function fixture () {
//     test.deepEqual(this, {foo: 'bar'})
//     return this.foo
//   }

//   var fn = bindContext('abc', fixture, {foo: 'bar'})
//   var actual = fn()
//   var expected = 'bar'

//   test.equal(actual, expected)
//   test.equal(fn.name, 'abc')
//   done()
// })

// test('should accept fn and context as 2nd argument', function (done) {
//   function set () {
//     test.deepEqual(this, {username: 'tunnckoCore'})
//     return this.username
//   }

//   var fn = bindContext(set, {username: 'tunnckoCore'})
//   var actual = fn()
//   var expected = 'tunnckoCore'

//   test.equal(actual, expected)
//   test.equal(fn.name, 'set')
//   done()
// })

// test('should have proper .toString method', function (done) {
//   function foo () {
//     return this.foo ? this.foo : false
//   }

//   var fn = bindContext(foo, {foo: 'bar'})
//   var actual = fn()
//   var expected = 'bar'

//   test.equal(fn.name, 'foo')
//   test.equal(actual, expected)
//   test.equal(typeof fn.toString, 'function')
//   test.ok(fn.toString().indexOf('function foo ()') !== -1)
//   test.ok(fn.toString().indexOf('return this.foo') !== -1)
//   done()
// })
