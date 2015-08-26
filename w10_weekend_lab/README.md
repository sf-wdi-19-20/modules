# Angular Weekend Lab

**Objective**: Build a full-featured, front-end application. Don't worry about storing data persistently between page refreshes; you will not need to build a server. You can use data from external APIs, or store mock data (which will reset when the page loads).

We'd like you to use AngularJS to **do one thing very well**.  Your app should solve a small, focused problem.  

## Background

Because Angular and other front-end frameworks allow you to build the entire front end in a "server agnostic" style (without worrying about what kind of server you use), it is good practice to build **Outside-In** completely, meaning you build out the front end exactly the way it would look and work before starting work on the server. You only need to take into account what data your server (or an external API) will make available to you. With mock data, your front end resembles a **full-featured prototype**, even before you start on the server itself. 

This process a lot helps with freelance and contract work because your clients will get excited to see a prototype that is working and navigable. Also, if a client wants you to change something, it is easier to make rapid changes with the front end framework than to change most backend frameworks' server and database structures. 

## Requirements

Your app should meet all of the following requirements:

* Your app should be beautifully designed and pleasant to use. Write out user stories, draw out wireframes, and use well-designed websites as inspiration.
* Your code should be organized and commented, and you should push your project to github with frequent, descriptive commit messages.
* Your app must include built-in angular directives, and it must only interact with the DOM through those directives. You should not write any jQuery code yourself (though it is okay to include the jQuery library if it is required by another library you use).
* Your app must include at least one controller with data in its `$scope`.
* Your app must be interactive. Get some input from the user!

## Other Ideas

If you'd like to go further with Angular, try these ideas!

* Create and use a custom angular directive.
* Use an <a href="https://angular-ui.github.io">angular-ui module</a> for a UI component or feature.
* Incorporate an external angular directive *other than an angular-ui module* (for example, `ngDraggable` or `ngStorage` -- once place to browse is <a href="http://ngmodules.org" target="_blank">ng-modules.org</a>).
* Use data from an external API.
* Create multiple view templates and use routing to navigate.
* For a real stretch challenge, move from mocked data to a Backend as a Service (see details below).

## App Ideas

You can make any app idea you like, but it should be small enough in scope that you can build it over one weekend and focused enough that you can build it *well* in that time. You could even do a first pass of a front end for your project 3 idea. If you're having trouble coming up with ideas, remember to use Startup Ninja! Here are some suggestions for app ideas that you could build:

1. A Stack Overflow clone with questions, comments, answers, and votes. (Remember, the data would be mocked to start out!)
1. Bring back SpaceBook©®™! The social network for astronauts and aliens connecting off-world.
1. <a href="https://github.com/sf-wdi-19-20/angular_party" target="_blank">A dance party app with gifs and music!</a>
1. <a href="https://github.com/sf-wdi-19-20/angular_hangman" target="_blank">A hangman game!</a>
1. Another microblog!
1. Any idea you'd like!

## Stretch: Backend as a Service

Once you've built the front end in Angular, depending on what you want your app to do, you could use a **Backend as a Service** to make your own custom back end very rapidly. Two major competitors in this space are <a href="https://www.firebase.com" target="_blank">Firebase</a> and <a href="https://parse.com" target="_blank">Parse</a>. To decide between them, just answer this question:

> Do I need asychronous communication with the server, like chats?

If the answer is "Yes", then use Firebase. If "No", then use Parse.

Use their getting started docs to . . . get started.
