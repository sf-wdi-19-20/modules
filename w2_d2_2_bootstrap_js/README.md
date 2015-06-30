# Bootstrap's Javascript

| Objectives |
| :--- |
|  |
| Utilize Bootstrap's JavaScript components |

## Motivation (Why?)

Bootstrap is virtually universal today and its JS components simplify many common UX/UI patterns.

##Using jQuery Plugins with Bootstrap
- One of the most powerful aspects of jQuery is that its functionality can be extended by plugins.
- You can write your own plugins which is pretty straightforward or you can use a wide variety of plugins created by other people.
- Bootstrap provides a number of plugins that help you with your development.
- You can see a good list of what they provide [here](http://getbootstrap.com/javascript/).
- Some of the plugins can be manipulated through data- attributes instead of having to write any JavaScript, like the dropdown plugin:

```
<div class="dropdown">
	<button id="dLabel" type="button" data-toggle="dropdown">
		Dropdown trigger
		<span class="caret"></span>
	</button>
	<ul class="dropdown-menu">
		<li><a href="#">Link 1</a></li>
	</ul>
</div>
```

- Most of these plugins can also be triggered via JavaScript as well. For example the dropdown menus again:

```
$('.dropdown-toggle').dropdown();
```

##In-Class Exercise: Modal Window
- Let's take a look at a neat plugin called the modal window.
- Try with a partner to implement a modal window that is triggered via a button on the page.
- **Bonus:** Try to open the window using the two possible methods - data attributes and via JavaScript directly.

##Challenges

### Docs & Resources

[Bootstrap JavaScript Docs](http://getbootstrap.com/javascript/)

### Basic Challenges

1. Create a new project called `bootstrap-js` and create a project with bootstrap.
2. Add a navbar, a jumbotron with a container containing a header 1 welcome message, and below that another container
2. Add the bootstrap tabs component below the jumbotron
4. In one of the tabs, like an article in a news site, add some text to a box, and a link called 'more' that uncollapses and collapses some lorem ipsum text in it.
3. Above your tabs but below the jumbotron, put a link called 'login' that reveals a login modal (email, password, login button) (can you make it a narrow modal?)

### Stretch Challenges

1. Extending challenge 4 above, can you get the 'more' link to say 'less' when it is uncollapsed?
2. Add a scrollspy navbar to your `bootstrap-js` project
3. Put your contact me form in a modal in your portfolio project