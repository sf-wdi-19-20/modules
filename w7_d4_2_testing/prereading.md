# Testing

## Why We Test

- save time when we create or update a project
- provide a better user experience
- create secure, functioning apps
- avoid unintentionally [killing people](https://en.wikipedia.org/wiki/Therac-25), [crashing the stock market](http://money.cnn.com/2012/08/09/technology/knight-expensive-computer-bug/), or [blowing things up](https://en.wikipedia.org/wiki/Cluster_(spacecraft)#Launch_failure)

Failures can be *very* costly.  Even if your app doesn't make life or death decisions or keep track of financial information, you **will** lose users when they have a negative experience with a buggy product.

## How We Test

### Automated Testing

As web developers, we'll use "automated testing" to check that our code is working as expected. Every time we make a change, we can re-run the automated tests to make sure we haven't broken anything.

**Automated testing is awesome! In the long term, you:**

* Save time you would have had to use checking through your program manually
* Avoid bugs by catching tricky edge cases
* Make it much easier to maintain, refactor, or extend your codebase
* Organize your tests and testing procedure in a way that's easy to find and understand

    
**Automated testing is a pain! In the short term, you:**

* Invest time up front deciding what to test
* Invest time up front to create good tests that
   * accurately check whether your code is working
   * test the _right_ things about your system
* Invest time to create new tests when you plan to add feature sets 


###Development Patterns

We've looked at a few software development approaches so far. 

For the first part of the course, we used a relaxed version of **Behavior Driven Development** (BDD). BDD has us build towards expected behaviors of our project both at the level of user interactions (building towards user stories) and at the level of code (writing out comments to say what each part of our code should do and building toward those).

We've also talked about **Error Driven Development** (EDD), using error messages as clues to help us build out a project. This is more feasible with tools like Rails that give us good error messages.  Error messages are used often, but EDD is not considered as effective a form of development as BDD or TDD.

For Rails apps, we'll emphasize **Test Driven Development**. We'll start by making a few goals for an app's behavoir.  Then, we'll write tests that can check whether we've met those goals... before we start to code! Finally, we'll write code we hope enables each behavior and check whether our code passes the test.   TDD tries to ensure that you understand the problem before coding a solution. It's also meant to keep programmers on track. If you write tests firsts, you're less likely to forget an important functionality.  As another benefit, TDD works well with pair programming.  You can "ping pong" the tests, having one per write them and another person write the code to pass them.


### Types of Tests

* Unit Tests -- do small, low-level things work independetly? (e.g. a function or Model logic)
* Integration Tests -- do multiple smaller things work together correctly? (e.g. Controller logic)
* Acceptance Tests -- do elaborate, high-level things work as intended? (e.g. View logic).


### Four Phase Tests

As we practice TDD, we'll focus on a four-phase testing methodology. Each test should *set up* some scenario, run an *excersize* starting from that schenario, *verify* that the intended effect happened, and *tear down* any changes that were made for the purpose of the test. 

### Testing Tips

1. Don't try to test everything unless you have a really critical mission (space travel, nuclear missile defense, pacemaker timing...).  100% "test coverage" is almost unheard of in software development. It would be overkill for the projects we're doing and for the work many companies do.

2. Write tests that help you be more efficient as a developer.

## Testing Rails Applications

Though Rails has built-in tools for testing, we'll use `rspec`, `capybara`, and `Factory Girl` instead of those default tools.  Read at least the first 6 sections (down to and including "Factory Girl") of this [thoughtbot post about rails testing](https://thoughtbot.com/) that goes over these tools.

## Reflection Questions & Submission

1. How have you been testing your apps so far?  

1. What ideas from the reading can you use to help improve your testing process?

1. What parts of a Rails app do you think are most important to test?
