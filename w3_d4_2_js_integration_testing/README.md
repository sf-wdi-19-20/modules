# Integration Testing with Javascript

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

### Key Snippets & Concepts

#### Unit vs. Integration Tests

**Unit** test test only one part of the code independently.

**Integration** test test all the code the way a user would use it.

#### Example of Basic Test

```
var request = require('request')
  , cheerio = require('cheerio')
  , expect = require('chai').expect

var baseUrl = 'http://localhost:3000';

var agent = request.agent(app);
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

#Challenges

### Docs & Resources

### Basic Challenges

### Stretch Challenges
