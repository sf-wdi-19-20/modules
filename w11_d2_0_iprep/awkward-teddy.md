## Awkward Teddy

You're working on a robotic teddy bear toy that will teach children basic tasks. It's working for task lists that can happen in any order, like gathering each toy into the toy bin. 

```
Gathering Toys
* put the giraffee into the toy bin
* put the blocks into the toy bin
* put the doll into the toy bin
```

Unfortunately, the teddy bear doesn't do very well when one task requires another to be done ahead of time.  For example, the teddy bear has a tendency to instruct children to "pour the juice" before they "get a cup", or to "put on underwear" when they've already "put on pants".


```
Getting Dressed
* task 1: put on socks 
* task 2: put on shirt
* task 3: put on pants  (prerequisites: put on underwear)
* task 4: put on shoes  (prerequisites: put on socks, put on pants)
* task 5: put on underwear 
```


The teddy bear is already getting information about prerequisities, but it's not using that information yet. Write a program that takes in a list of tasks (including prerequisite information) and orders them in a way that respects all prerequisites. 

**Key questions:**
* What kind of input does the teddy bear's function get?
	* List of tasks, like:
		`{task_id: 1, description: "put on socks", prerequisites: []}`    
		`{task_id: 3, description: "put on shoes", prerequisites: [1]}`
	* The tasks might not be in a reasonable order.


* What should the output be?
	* An ordered list (or array) of the tasks in a reasonable order that they can be completed, respecting prerequisites. 
	* like `[1, 5, 2, 3, 4 ]` or `[5, 1, 3, 2, 4]`

**Solution**

The algorithm to use for this problem is called *topological sort*. Look it up to read about ways to solve it. 
