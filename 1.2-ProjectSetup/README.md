#Project Setup
| Objectives |
| :--- |
| Start a basic web project from scratch and push it to github. |

##Terminal

Welcome to the Terminal is the command line interface of your computer. Developers live in the command line.

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

###Common Terminal Commands

  | Command  | What it does
  | ------  | -------
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



##Git & Github

###Common Github Commands

| Command  | What it does
| :------  | -------
| `$ git init` | Initialize git in a directory |  
| `$ git add .` | Change Directory |
| `$ git commit -m <<comment>>`    | Go up one level of the current path |


###Basic Terminal Challenges

1. Check the path to the directory you are in
2. Navigate to the root directory
3. Create a directory called 'dev' in the root of your computer
4. Inside 'dev' Make a directory called `blogtastic`
5. Make a file called `index.html`
6. Make a file called `app.js`
7. Make file called `style.css`
8. Make a folder called `images`
5. Open the `blogtastic` folder in Sublime (if you do not already have sublime's terminal command installed follow [these instructions](https://www.sublimetext.com/docs/2/osx_command_line.html))
6. Edit index.html to say a message in `<h1></h1>` tags
7. From the terminal, open index.html in the browser
8. List the files in your blogtastic directory
6. Install "tree" - `$ brew install tree`
7. Call tree on your `blogtastic` directory. Pretty nice . . . : )
9. Initialize a github repository in your `blogtstic` directory
10. Create a github repo called **blogtastic**
11. Add, commit, and push your `blogtastic` files to your new blogtastic repo
4. Create a file called `README.md` in the root of your project with some basic info and add one line that says `#README`. Push this to github and view the repo online.
13. In Sublime, change the syntax highlighting of a new file from HTML to Javascript.


### Stretch Challenges & Extra Practice
1. In Sublime, change your default spaces to 2
2. From inside sublime add a new folder to `blogtastic` and add two new files to that folder.
3. Create a new project from the beginning with the file `index.html`, `README.md`, and a folder called `assets`.
4. Inside of assets create the folders `js`, `style`, `images`, `fonts`.
5. Inside `style` create the file `style.css`, inside `js` create the file `scripts.js`
6. Go to
5. In Sublime, remove text wrapping
6. Add the Twitter Bootstrap [basic template](http://getbootstrap.com/getting-started/#template) to `index.html`
7. Open index.html
8. Add the Twitter Bootstrap Navbar to `index.html`
8. [Trygit](https://try.github.io/levels/1/challenges/1)

### Resources

1. [Sublime Text Shortcuts Cheatsheet](http://www.cheatography.com/martinprins/cheat-sheets/sublime-text-3-osx/)
2. [Github Markdown Basics](https://help.github.com/articles/markdown-basics/)
