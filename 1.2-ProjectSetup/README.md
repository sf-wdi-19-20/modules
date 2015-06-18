#Project Setup
| Objectives |
| :--- |
| Start a basic web project from scratch using the terminal, sublime, and then push an initial commit to github. |

![getting started](http://alock011.students.digitalodu.com/wp-content/uploads/2014/03/Padawans.jpg)

###Core Concepts
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

##Terminal

Welcome to the Terminal is the command line interface of your computer.

###Terminology
Although they technically mean slightly different things, the following terms are synonymous with the Terminal Environment

  *  **Shell, bash,Command Line (CLI), Text Terminal, SSH (on remote machines), [UNIX Shell](http://en.wikipedia.org/wiki/Unix_shell)** - all mean your "terminal" program in OSX
  * **Directory** - a folder in your operating system
  * **Path** - Location of a directory or file in your operating system
  * **`$`** - initial character in the console (generally tells you if code is run in the terminal)
  * **`.`** - (period) the path to your current directory. E.g. (`$ sublime .` Opens the current directory in sublime)

###Common paths:
  * `~` - root directory of your operating system
  * `~/Desktop` - Your desktop
  * `~/dev` - you might choose to keep all your dev projects in a folder called dev in the root of your OS

###Basic Terminal Commands

  | Command  | What it does |
  | :------  | ------- |
  | `$ pwd` | See the path of the directory you are in |  
  | `$ cd ~/Desktop` | Change Directory |
  | `$ cd ..`    | Go up one level of the current path |
  | `$ cd -` | Go 'back' to the last path you were at |
  | `$ mkdir` | Makes a new directory in the current directory |
  | `$ ls` |   Lists the folders and files in the current directory |
  | `$ touch <<file name>>` | Creates a file in the current directory |
  | `$ open <<path>>` | Opens the file at the path you |
  | `$ sudo <<command>>` | Means "Superuser Do" - overrides any permissions allowing you to make changes and install programs on the computer (requires your computer's password) |
  | `TAB` |  Autocompletes directory and file names |
  | `$ sublime <<path>>` | Opens file in sublime

##Sublime Text

Sublime Text 2 (or 3!) is a **text editor** - a program built to help you code. Some common uses:

* Syntax highlighting
* Indentation
* Using Multiple Cursors
* File/Folder Navigation
* Find and Replace

| Shortcut  | What it does
| ------  | -------
| `TAB` | Autocomplete of common blocks of code (`fun + TAB` will autocomplete to `function() {};`) |  
| `cmd + CLICK` | add new cursors |
| `alt + CLICK & DRAG`| add new cursors |
| `cmd + F` | Find (and replace) in current file |
| `cmd + shift + F` | Find (and replace) in a whole project or directory |

##Git & Github

Git and Github.com are used to:

* Collaborate with many developers
* Version your code (e.g. "AHHHH I messed up, oh good, I can use git to step back and try again")

###Beginner Github Commands

| Command  | What it does
| :------  | -------
| `$ git status` | See you current branch and unstaged or staged files |
| `$ git init` | Initialize git in a directory |
| `$ git add <<PATH>>` | Stage a file (or `.` for all files in a directory) for commit. |
| `$ git reset` | Unstage files you just added to staging but haven't committed yet |
| `$ git commit -m <<comment>>`    | Commit files that are staged to commit, with a comment. |
| `$ git clone <<URL>> <<NEW NAME>>` | Copy a remote repo to your computer with a new name to start customizing it. (Cloning does NOT preserve remote tracking data) |
| `$ git fork <<URL>> <<NEW NAME>>` | Copy a remote repo to your computer with a new name to start customizing it. (Cloning does NOT preserve remote tracking data) |
| `$git log` | See the logs of commits |

###Intermediate Github Commands

| Command  | What it does
| :------  | -------
| `$ git branch` | See all branches |
| `$ git checkout <<COMMIT/BRANCH>>` | Move to a branch or commit |
| `$ git checkout -b <<NEW BRANCH NAME>>h` | "stash" your current changes |
| `$ git stash` | "stash" your current changes |
| `$ git reset --hard <<COMMIT>>` | permanently reset your project to a previous commit (CAREFUL DESTRUCTIVE ACTION) |

#Challenges

More resources at the bottom:

###Basic Terminal & Sublime Challenges

1. Check the path to the directory you are in
2. Navigate to the root directory
3. Create a directory called 'dev' in the root of your computer
4. Inside 'dev' Make a directory called `blogtastic`
5. Change directories into `blogtastic`
5. Make a file called `index.html`
5. Open the `blogtastic` folder in Sublime (if you do not already have sublime's terminal command installed follow [these instructions](https://www.sublimetext.com/docs/2/osx_command_line.html))
6. Edit index.html to say a message in `<h1></h1>` tags
6. From the Terminal, open `index.html` in the browser
6. From the Terminal, Make a file called `app.js`
7. Make file called `style.css`
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
8. [Trygit](https://try.github.io/levels/1/challenges/1)

### Stretch Git Challenges

6. Imagine you and your neighbor were going to work together on the `blogtastic` project. Fork their **blogtastic** repo from github.com. Make a change and push it. Have them pull. Can they see your change?
7. Developers often begin projects from "seed projects" - from open source basic projects. But be careful! Don't use seed projects with libraries you are not familiar with. Clone this "[jquery seed project](https://github.com/ajbraus/seed-jquery)" repo and give the project a new name
6. Create a new branch of the new project
7. open the project and make some small change to index.html

### Resources

1. [Terminal Cheatsheet](https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-)
1. [Sublime Text Shortcuts Cheatsheet](http://www.cheatography.com/martinprins/cheat-sheets/sublime-text-3-osx/)
2. [Github Markdown Basics](https://help.github.com/articles/markdown-basics/)
3. [Github Cheatsheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
