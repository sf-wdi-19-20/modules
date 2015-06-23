#Project Setup (Terminal, Sublime, Github)
| Objectives |
| :--- |
| Start a basic web project from scratch using the terminal, sublime, and then push an initial commit to github. |
| Explain how Git and Github.com help developers version their code and collaborate on teams. |

![getting started](http://alock011.students.digitalodu.com/wp-content/uploads/2014/03/Padawans.jpg)

###Key Take Aways
* The Terminal, Sublime Text, and Github core industry tools
* Always move in baby steps and take pulse checks
* Version your code, Commit a lot
* Code is collaborative
* GA is collaborative

###Demo
1. Bootstrapping a project from the terminal
2. Adding and manipulating code in Sublime Text
3. Initializing git in the project and adding, committing, and pushing to a github repo.
4. Cloning and customizing a repo

### Resources

1. [Terminal Cheatsheet](https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-))
2. [Sublime Text Shortcuts Cheatsheet](http://www.cheatography.com/martinprins/cheat-sheets/sublime-text-3-osx/)
3. [Github Cheatsheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
4. [Github Markdown Basics](https://help.github.com/articles/markdown-basics/)

#Challenges

###FIRST: [Try Git](https://try.github.io/levels/1/challenges/1)

###Basic Terminal & Sublime Challenges

1. Check the path to the directory you are in
2. Navigate to the home directory
3. Create a directory called 'dev' in the home of your computer
4. Inside 'dev', make a directory called `blogtastic`
5. Change directories into `blogtastic`
5. Make a file called `index.html`
5. Open the `blogtastic` folder in Sublime (if you do not already have sublime's terminal command installed follow [these instructions](https://www.sublimetext.com/docs/2/osx_command_line.html))
6. Edit index.html to say a message in `<h1></h1>` tags
6. From the Terminal, open `index.html` in the browser
7. From the Terminal, make file called `style.css`
7. Command + P to jump to `style.css`
8. Add `h1 { color: red }` to `style.css`
9. Reload your site in the browser and check that the text color has changed.
6. From the Terminal, Make a file called `app.js`
8. Make a folder called `images`
8. From the terminal, List the files in your blogtastic directory
13. In Sublime, as an experiment, can you change the syntax highlighting of index.html from HTML to Javascript and back again?

![nicework](https://s-media-cache-ak0.pinimg.com/736x/81/b9/c5/81b9c5ada3377d7592f077daaafa3db4.jpg)
### Basic Git Challenges

9. Initialize a github repository in your `blogtstic` directory
10. Create your own github.com repo called **blogtastic**
11. Add, commit, and push your `blogtastic` files to your new **blogtastic** repo. Call `$ git status` after each step. Look at the repo in github.com. How does it look? Can you see the files?
4. Create a file called `README.md` in the root of `blogtastic` with some basic info and add one line that says `#README`. Push this to github and view the repo online, can you see the README.md text?

![yeswecode](http://xaharts.org/funny/i/gitopuss/github-octocat_yes-we-code.jpg)

### Stretch Terminal and Sublime Challenges

(if you don't have homebrew installed - install it now with the following terminal command)

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

6. Install "tree" - `$ brew install tree`
7. Call tree in your `blogtastic` directory. Pretty nice . . . : )
2. In Sublime, add a new folder to `blogtastic` called `templates` and add four new html files to that folder called `post-index.html`, `post-show.html`, `post-new.html`, `post-edit.html`.
1. In Sublime, change your default spaces to 2
3. From your Terminal, navigate to your `dev` folder and begin a new project from the beginning by adding a new directory called `stretch` and within that directory add the file `index.html`, `README.md`, and a folder called `assets`.
4. Inside of assets create the folders `js`, `style`, `images`, `fonts`.
5. Inside `style` create the file `style.css`, inside `js` create the file `scripts.js`
6. In the `<head></head>` tag of `index.html` link to your `scripts.js` and `styles.css` files.
7. Add a custom style `body { color:red; }` to `styles.css` and a `console.log("Tada!")` to `scripts.js`. Did they work?
5. In Sublime, remove text wrapping
6. Add the Twitter Bootstrap [basic template](http://getbootstrap.com/getting-started/#template) to `index.html`
7. Open index.html
8. Add the Twitter Bootstrap Navbar to `index.html`
9. Use the Twitter Bootstrap grid classes to make a 3-6-3 grid similar to Quora.com or Facebook.com. Put placeholder text in the columns.


### Stretch Git Challenges

6. Imagine you and your neighbor were going to work together on the `blogtastic` project. Clone their **blogtastic** repo from github.com. Make a change and push it. Have them pull. Can they see your change?
7. Developers often begin projects from "seed projects" - from open source basic projects. But be careful! Don't use seed projects with libraries you are not familiar with. Clone this "[jquery seed project](https://github.com/ajbraus/seed-jquery)" repo and give the project a new name
6. Create a new branch of the new project
7. open the project and make some small change to index.html
8. [git-it](https://github.com/jlord/git-it)
8. Repeat [Trygit](https://try.github.io/levels/1/challenges/1). Practicing these commands will help you build "muscle memory" for them.
