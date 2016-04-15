

## 2.0.2 - 2016-04-15
- Release v2.0.2 / npm@v2.0.2
- fix failing test: does not set name of anonymous function to `anonymous` as previously (may breaking)
- refactor, use `rename-function`

## 2.0.1 - 2016-03-03
- Release v2.0.1 / npm@v2.0.1
- use `get-fn-name` package

## 2.0.0 - 2016-03-03
- Release v2.0.0 / npm@v2.0.0
- allow failures on node 0.10 and 0.12 (see [#c2b1fe comment](https://github.com/tunnckoCore/bind-context/commit/c2b1fe0d52b35a17a0c55938a2e81b8a47573a89#commitcomment-16482077))
- update / simplify tests
- refactor: breaking: consistent arguments order - now `Object, Function, Name`
- big improvements on function name resolving, handled many rare/edge cases

## 1.0.1 - 2016-02-26
- Release v1.0.1 / npm@v1.0.1
- create the `.toString` method non-enumerable (hidden), using `define-property`
- replace `fn.name` with `fn-name` lib

## 1.0.0 - 2015-07-19
- Release v1.0.0 / npm@v1.0.0
- fix usage examples
- add related section
- add new test
- update description
- update usage
- add test for proper toString
- add keywords
- add ctx argument and more tests
- implement :star2:

## 0.0.0 - 2015-07-18
- first commits