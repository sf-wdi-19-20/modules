# Automated Testing with Javascript

| Objectives |
| :--- |
| Add basic test coverage to any Node/Express API with integration tests |
| Describe and explain the value of Test Driven Development and Behavior Driven Development (TDD/BDD)|

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Integration Testing TDD/BDD | Mocha, Chai, Request, Cheerio | Challenges |

### Preparatory Readings

1. [Difference Between Test Methodologies](http://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test/4904533#4904533)

### Motivation (Why?)

Automated testing makes you have a clearer spec of what you want to build, and lets you code much faster and with fewer errors. Many jobs require you to follow Test Driven Development and Behavior Driven Development (TDD/BDD) methodologies.

### Analogy (What?)

**Automated testing** means instructing the code to test itself and to expect certain view or data objects. When you have high test coverage you can move fast.

**Test Coverage** means the percentage of your features that have tests that secure them.

* Basic Coverage: %40 of major features have tests
* Medium Coverage: 80% of major features and 30% of minor features
* High Coverage: 80% of all features have tests

**TDD/BDD** Means writing tests first

1. feature idea
2. write test
3. write code
4. run tests
5. repeat

#### Unit & Integration Tests

**Unit Tests** test only one part of the code independently.

**Integration Tests** test all the code together.

**Functional Tests** test the way the user would actually use the code.

#### Example of a Simple API Test

Add your testing libraries
```
npm install mocha chai request --save
```

File Structure

```
|node_modules
|test
  - test.js
- index.js
- package.json
```


```
//
// test/test.js
//

var request = require('request')
  , expect = require('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

describe('Google.com', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('https://google.com/', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});
```
#### How to run tests

mocha by default runs the files in the directory ./test
```
$ mocha
```

#### Example of Chai Expect Selectors

```
expect(object)
  .equal(expected)
  .deep.equal(expected) // same as .eql
  .be.a('string')
  .include(val)

  .be.ok(val)
  .be.true
  .be.false

  .be.null
  .be.undefined
  .be.empty
  .be.instanceOf

  .gt(5)  # or .above .greaterThan
  .gte    # or .at.least
  .lt(5)  # or .below

  .have.members([2, 3, 4])
  .have.keys(['foo'])
  .have.key('foo')

  .exist
```

#Challenges

### Docs & Resources

* Here is an article on our testing stack. https://davidbeath.com/posts/testing-http-responses-in-nodejs.html

* **[Mocha](http://mochajs.org/#getting-started)** - for running asynchronous tests
* **[Request](https://github.com/request)** - for handling HTTP request/response
* **[Chai](http://chaijs.com/api/) (expect)** - for expect assertions. (Also has 'asserts', and 'should' but we are going to ignore those for now.)

### Basic Challenges

1. Install your testing libraries
```
npm install mocha chai request --save
```
2. Add ```test/test.js``` to your project.
3. Add the example code that tests Google.com and run it with ```$ mocha```
3. Log to the console ```err```, ```res```, and ```body```.
4. Change the test to test amazon.com. Make assertions that pass and fail.
5. Turn on your localhost:3000 server and point the test at the url to one of your localhost:3000 GET API paths. Log to the console ```err```, ```res```, and ```body```.
1. Write 1 test for each of your API's GET routes (make sure you can make them both fail and pass). Reproduce example above in notes.
2. Add 1 POST test to your API - look at request docs to send request.post() and check response.
3. Add 1 PUT test to your API - ditto.
4. Add 1 DELTE test to your API - ditto.

### Stretch Challenges (View Testing)

Above we are testing APIs, but what if we wanted to test more than just our API? What if we wanted to test our url end-points that respond with HTML? We would have to check that DOM elements were in our responses. For this we can use ```cheerio```

Think of ```cheerio``` as **jQuery for Testing**. Watch: cheerio digests the html (the body of the response) into a ```$``` variable and then you query it with a jQuery-like syntax.

```
var request = require('request')
  , expect = require('chai').expect
  , cheerio = require('cheerio')

var baseUrl = 'http://localhost:3000';

describe('Google.com', function() {
  it('should have a title of "Google"', function(done) {
    request('https://google.com/', function(err, res, body) {
      var $ = cheerio.load(body);
      var title = $('title').text();
      expect(title).to.equal('Google');
      // expect(title).to.equal('Moogle');
      done();
    })
  })
});
```

1. Add **[Cheerio](https://github.com/cheeriojs/cheerio)** to a project. Cheerio is for selecting HTML elements from responses (like "jQuery for tests")
2. Test that the title of ```www.google.com``` is "Google".
3. Add 3 view tests to your app. Make sure they can fail and pass.

## The Importance of Selectors

When testing views, its better to choose permanent elements of the page like id's, instead of text or selectors that change often like classes, otherwise your tests will be come ```brittle``` meaning they will break when your code still works.
