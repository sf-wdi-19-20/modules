# Linked Lists

## What are linked lists?

![linked list image from wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/640px-Singly-linked-list.svg.png)

Linked lists store sequentail (ordered) data in a series of "nodes".  Each node in a linked list contains some value and a reference or "pointer" to the next node.  If the linked list is "doubly linked", each node will also have another pointer to the previous node.  Linked lists that only have pointers to the next node are called "singly linked."

The very last node of a linked list, called the tail, has a null next node because nothing comes after it.  The very first node is called the head. The head will always have a null previous node (assuming the list is doubly linked) because nothing comes before the head.

Singly linked lists look a lot like trees, except each node can only have at most one child.

If you're asked an interview question about a linked list, make sure to clarify whether it's singly linked (only next node pointers) or doubly linked (both next and previous node pointers). We'll focus on singly linked lists.


## So like... arrays?

**No!**

We need to back up a step and take a closer look at arrays... it turns out they're not what we thought they were!

Arrays store data in one continuous block of computer memory.  The computer sets aside just enough memory when the array is created. That means, whenever you need to change the size of an array, you have to find a whole new block of memory that's big enough to fit the array. It also means you have to tell the computer exactly how big you want the array to be when you create it.

**... No I don't.**

No, you don't. In lower level computer programming languages like C, you *would* have to. Our high-level languages abstract that away and handle array resizing for you efficiently. But it's good to know that's what's happening in the background, because that's the biggest difference between arrays and linked lists. 

** Linked lists don't need to be resized with one giant block of memory; they can grow with pointers to other parts of the computer's memory. **

** It's easier to insert into and delete from a linked list**, because with an array you'd need to move every element after the insertion point over by one. With a linked list... well you'll figure that out in the challenges. 

On the other hand...

** You can't quickly access a particular node in a linked list, like you can with array indices.** You have to start with the head and move sequentially.
** Linked lists take up a tiny bit more space** because in addition to storing the actual data, you have to store the pointers. 
** It can take more time to access a full linked list,** because the data living in different places can't just be read as a continous chunk.