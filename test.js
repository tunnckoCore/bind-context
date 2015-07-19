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
})
