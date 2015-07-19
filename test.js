/*!
 * bind-context <https://github.com/tunnckoCore/bind-context>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var bindContext = require('./index')

test('bind-context:', function () {
  test('should throw TypeError if not function', function (done) {
    function fixture () {
      bindContext(123)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /expect a function/)
    done()
  })
  test('should throw TypeError if name and context only', function (done) {
    function fixture () {
      bindContext('foo', {bar: 'baz'})
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /expect a function/)
    done()
  })
  test('should accept only function and preserve original name', function (done) {
    function fn1 () {
      test.deepEqual(this, {foo: 'bar'})
      return this.foo
    }

    var fn = bindContext.call({foo: 'bar'}, fn1)
    var actual = fn()
    var expected = 'bar'

    test.equal(actual, expected)
    test.equal(fn.name, 'fn1')
    done()
  })
  test('should accept name and function (change original name)', function (done) {
    function fn1 () {
      test.deepEqual(this, {a: 'b'})
      return this.a
    }

    var fn = bindContext.call({a: 'b'}, 'foobar', fn1)
    var actual = fn()
    var expected = 'b'

    test.equal(actual, expected)
    test.equal(fn.name, 'foobar')
    done()
  })
  test('should accept name, fn and context as 3rd argument', function (done) {
    function fixture () {
      test.deepEqual(this, {foo: 'bar'})
      return this.foo
    }

    var fn = bindContext('abc', fixture, {foo: 'bar'})
    var actual = fn()
    var expected = 'bar'

    test.equal(actual, expected)
    test.equal(fn.name, 'abc')
    done()
  })
  test('should accept fn and context as 2nd argument', function (done) {
    function set () {
      test.deepEqual(this, {username: 'tunnckoCore'})
      return this.username
    }

    var fn = bindContext(set, {username: 'tunnckoCore'})
    var actual = fn()
    var expected = 'tunnckoCore'

    test.equal(actual, expected)
    test.equal(fn.name, 'set')
    done()
  })
})
