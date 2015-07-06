# API Testing with Javascript

| Objectives |
| :--- |
| Add basic test coverage to any app through integration tests |
| Use Test Driven Development and Behavior Driven Development |

| Concepts | Tools | Activities |
| :---: | :---: | :---: |
| Integration Testing TDD/BDD | Mocha, Supertest, Chai | Challenges |

### Preparatory Readings

1. [Difference Between Test Methodologies](http://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test/4904533#4904533)


### Motivation (Why?)

### Analogy (What?)

### Key Concepts & Snippets

#### Unit & Integration Tests

**Unit Tests** test only one part of the code independently.

**Integration Tests** test all the code the way a user would use it.

#### Example of a Simple API Test

```
var request = require('request')
  , expect = require('chai').expect

var baseUrl = 'http://localhost:3000';

describe('home page should say "hello world!"', function() {
  request(baseUrl, function (error, response, body) {
    expect(body.to.contain('hello world!'));
  });
});
```

#### Example of Chai Expect Selectors

```
```

#Challenges

### Docs & Resources

* **[Mocha](http://mochajs.org/#getting-started)** - for running asynchronous tests
* **[Request](https://github.com/request)** - for handling HTTP request/response
* **[Chai](http://chaijs.com/api/)** - for assertions

### Basic Challenges

1. Add 3 GET tests to a project from this week
2. Add 1 POST test to a project from this week

### Stretch Challenges (View Testing)

1. Add **[Cheerio](https://github.com/cheeriojs/cheerio)** to a project. Cheerio is for selecting HTML elements from responses (like "jQuery for tests")
2. Test that the title of ```www.google.com``` is "Google".
Hint:
```
var request = require('request')
  , cheerio = require('cheerio')
  , expect = require('chai').expect

var baseUrl = 'http://localhost:3000';

describe('home page should have title "App Title"', function() {
  request(baseUrl, function (error, response, body) {
    expect(error).to.be.not.ok;
    expect(response).to.be.not.a('undefined');
    expect(response.statusCode).to.be.equal(200);

    var $ = cheerio.load(body);
    var title = $('title').text();
    expect(title.to.be('App Title'));
  });
});
```
