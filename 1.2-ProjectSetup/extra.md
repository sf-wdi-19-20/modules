#extra stuff

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

| Command  | What it does
| :------  | :------- |
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
| :------  | -------
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
| :------  | :-------
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
| :------  | :-------
| `$ git branch` | See all branches |
| `$ git checkout <<COMMIT/BRANCH>>` | Move to a branch or commit |
| `$ git checkout -b <<NEW BRANCH NAME>>h` | "stash" your current changes |
| `$ git stash` | "stash" your current changes |
| `$ git reset --hard <<COMMIT>>` | permanently reset your project to a previous commit (CAREFUL DESTRUCTIVE ACTION) |
