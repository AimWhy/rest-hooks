# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [1.0.15](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.14...@rest-hooks/test@1.0.15) (2020-03-08)


### 🏠 Internal

* Only allow building types from root ([0c3d7ae](https://github.com/coinbase/rest-hooks/commit/0c3d7ae1a9d6130848f31850ed8b15e6ed01d0ab))



### [1.0.14](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.14-beta.0...@rest-hooks/test@1.0.14) (2020-02-18)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.14-beta.0](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.13...@rest-hooks/test@1.0.14-beta.0) (2020-02-18)


### 🐛 Bug Fix

* Poll fetches while testing should be wrapped in act ([#268](https://github.com/coinbase/rest-hooks/issues/268)) ([9c264bb](https://github.com/coinbase/rest-hooks/commit/9c264bb1e5a736b6bdab2077185cebd754c39b6f))


### 🏠 Internal

* Centralize jest config ([#230](https://github.com/coinbase/rest-hooks/issues/230)) ([5d769d2](https://github.com/coinbase/rest-hooks/commit/5d769d2485fe62ba65f4176894768bdbb6faafb3))



### [1.0.13](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.12...@rest-hooks/test@1.0.13) (2020-01-18)


### 🏠 Internal

* Remove devDep of rest-hooks from test ([#241](https://github.com/coinbase/rest-hooks/issues/241)) ([e00fdb6](https://github.com/coinbase/rest-hooks/commit/e00fdb6151a96e3ef6221ce1880a21db0c70320c))



### [1.0.12](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.11...@rest-hooks/test@1.0.12) (2020-01-17)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.11](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.9...@rest-hooks/test@1.0.11) (2020-01-17)


### 🏠 Internal

* Fix test package version ([f3a5a25](https://github.com/coinbase/rest-hooks/commit/f3a5a2507378e810f705b63fcc3ea3cb6869f7a3))



### [1.0.9](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.8...@rest-hooks/test@1.0.9) (2020-01-16)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.8](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.7...@rest-hooks/test@1.0.8) (2020-01-14)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.7](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.6...@rest-hooks/test@1.0.7) (2020-01-06)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.6](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.5...@rest-hooks/test@1.0.6) (2020-01-05)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.5](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.4...@rest-hooks/test@1.0.5) (2020-01-05)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.4](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.3...@rest-hooks/test@1.0.4) (2020-01-05)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.3](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.2...@rest-hooks/test@1.0.3) (2019-12-31)

**Note:** Version bump only for package @rest-hooks/test





### [1.0.2](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.1...@rest-hooks/test@1.0.2) (2019-12-22)


### ⚠ 💥 BREAKING CHANGES

* * fetchPlugin -> fetchOptionsPlugin, which has different signature
* No more SuperagentResource export
* New overridable Resource.resolveFetchData()

### 💅 Enhancement

* Resource.fetch uses fetch instead of superagent ([#199](https://github.com/coinbase/rest-hooks/issues/199)) ([5c740ec](https://github.com/coinbase/rest-hooks/commit/5c740ecf8f864e33cd9a6ab6cbc0a872ba0344ed))


### 🐛 Bug Fix

* Correct peerdepencency version constraints ([ab88e04](https://github.com/coinbase/rest-hooks/commit/ab88e0445f763d0648b39a376340f76a7710c197))


### 🏠 Internal

* Update lint rules ([#206](https://github.com/coinbase/rest-hooks/issues/206)) ([732f875](https://github.com/coinbase/rest-hooks/commit/732f87536e23d6b43cea3abce5be8cd6f1dd75c7))



### [1.0.1](https://github.com/coinbase/rest-hooks/compare/@rest-hooks/test@1.0.0...@rest-hooks/test@1.0.1) (2019-12-11)


### 🐛 Bug Fix

* export PromiseifyMiddleware ([#197](https://github.com/coinbase/rest-hooks/issues/197)) ([89370ff](https://github.com/coinbase/rest-hooks/commit/89370ffccaee39a6e147b449a76a1ce9778f7010))


### 📝 Documentation

* Point to repository directory for npm ([942a563](https://github.com/coinbase/rest-hooks/commit/942a563493d35dca9787e541dd89599d2059be1c))



## 1.0.0 (2019-12-02)


### ⚠ 💥 BREAKING CHANGES

* New packages should be ready for 1.0 release
* rest-hooks/test -> @rest-hooks/test

### 💅 Enhancement

* Move testing modules to own package ([#182](https://github.com/coinbase/rest-hooks/issues/182)) ([174461a](https://github.com/coinbase/rest-hooks/commit/174461a3c7568c53842eb6f4ea64e5b85dd20ce5))


### 🏠 Internal

* Centralize babel config & common test ([#189](https://github.com/coinbase/rest-hooks/issues/189)) ([16d22a3](https://github.com/coinbase/rest-hooks/commit/16d22a3ea0dab1b48ae59cdbd3ef8d53c33167f8))
* Use TypeScript project references ([#188](https://github.com/coinbase/rest-hooks/issues/188)) ([412c674](https://github.com/coinbase/rest-hooks/commit/412c6740cd825b06e8784d0d0f4d39e6cb331062))


### 📝 Documentation

* Improve readme for new packages ([2406f2c](https://github.com/coinbase/rest-hooks/commit/2406f2c78a10e41f6aa1e7deeb4c957a3c94314d))



# Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/coinbase/rest-hooks/releases) page.
