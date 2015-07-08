#Title

| Objectives |
| :--- |
| Students will be able to . . . |
| Explain the difference between referenced and embedded data |
| Create an express API to CRUD referenced data |
| Create an express API to CRUD data embedded inside other data |

@TODO: objectives wording help?


##Motivation (Why?)

In the real-world, data we want to model isn't all separate and flat; there are important relationships among the object types we'll want to work with.

Bloggers have Posts

Classes have Students

We need to be create APIs that allow apps (including our own apps) to CRUD *nested* data that represents these situations.



##Examples

Today's goal is to create studysheets of words in the catchphrasely dictionary app. Each studysheet will have a name and a list of phrases. 

###Design

How to represent studysheetS, and especially the phrase lists?

Embedded data is directly copied into the record for an item. Its most appropriate when the embedded data doesnt change often or when its only accessible through the main data type (studysheets have notes).

Reference is appropriate when data is shared, though it takes longer to look up; it's safer against getting out of synch.

Ways to embed: store  embedded, or store ref and embed upon req

Ways to reference:
- id
- link (preferred) + id + name



#Challenges

### Docs & Resources

### Basic Challenges

### Stretch Challenges
