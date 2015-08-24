# AngularJS Directives (Instructor Notes)

<!-- created by Brianna -->


## Setup

1. Write Objectives on board
1. Make "parking lot" for questions
1. Agenda/timeline on board
1. LEAVE SPACE for class brainstorming



## Motivation (5 min)

1. As you heard this morning, AngularJS is an extremely widely used framework for front-end web development.
1. Front-end frameworks are a lot like back-end. They try to make developing: faster, easier. (Some opinionated, some less so.)
1. Knowing a front-end framework will make it easier for you to pick up another front-end framework and make you more attractive to employers.  

1. Directives are necessary to using AngularJS; they're the tools in your toolkit. 

## What are directives? (5 minutes)

**fist to five** on what directives are?  


Fundamental directives you've already seen:

 * ng-app  (sets up entire app)
 * ng-controller (specifies which controller connects to this part of the HTML)
 * ng-model (specifies which part of $scope is bound to this part of the HTML)

And another notable one:
  * ng-repeat (to loop through something; creates its own internal scope)


See deeper view when we look at creating our own directives on Wednesday. For now, know that they give us a new way to connect HTML and the DOM to JS functionality. **In Angular, the only place where an application should access the DOM is within directives.**


## So what are things we did with DOM, jQuery, or JS?  (10 minutes)

Think pair share, what did we do with each pair say one thing we did with DOM, jQuery, or JS on the front end before.

Anticipated answers:

* submit and validate forms -- ng-submit
* show/hide DOM elements -- ng-show / ng-hide
* add/remove DOM elements -- ng-if
* change attributes on DOM elements  -- ng-class
* ajax requests -- ng-resource
* hyperlinks -- ng-href (ng-src)
* event listening  -- ng-click (etc)
* templating -- {{all of it!}}, ng-model, ng-include


## Strategy for finding directives to use? (10 min)

1. browse through existing angular directives
1. search for the thing you want to build or action you want to take, followed by "in angularjs"

I DO (5 min) - find one of the correct directives based on the answers given by class (or above), and incorporate it into code. (ng-show, or ng-hide)

`<div ng-show="true">this is always shown</div>`
`<div ng-show="isTutorialMode()">Here are a few tips....</div>`


WE DO (5 min) - ng-if (hard to figure this one out yourself, also note creates a new scope like ng-repeat)

`<div ng-if="shoppingCart.length"><p>You have {{shoppingCart.length}} items in your cart!</p> <button ng-click="shoppingCart.checkout()">Check Out</button>`

or `...<button ng-click="$parent.checkout()">...`


## YOU DO Challenges (~50 min)


## Circle around (10 min)

Go over first few challenges....




