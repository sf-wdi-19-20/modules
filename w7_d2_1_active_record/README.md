# Active Record
| Objective                                                                     |  
| :-------------------                                                          |  
| Write kick ass queries |  
| Modify migrations to add columns to tables|  

---

## Think, Pair, Share
Convert these English statements into queries. Consult the [Rails docs]('http://guides.rubyonrails.org/active_record_querying.html') as needed.

1) Give me the all users with the last name "Hendrickson".

2) Give me all the articles that have more than 200 words. HINT: There is an attribute called `wordcount`

3) Give me all the answers with more than 100 upvotes.

4) Give me all the articles without duplicates. HINT: `uniq`



## Challenges
1. Create a new rails project called database_queries and then create a Post MVC with title and body attributes using scaffolding.

2. Migrate the posts table to the database.

3. Open your rails console. Create 3,000 posts and indicate the post number in the title and body (i.e. "this is the title for post 567" and "this is the body for post 567"). HINT: `times` method

4. Run `rake db:seed` to populate posts.

5. Use Rails console to find the post with id = 489.

6. Find the last post.

7. Find the first post.

8. Find the posts with ids of 478 and 1134.

9. Find the posts with ids from 100 to 105.

10. Add a comments column to the posts table that will display the number of comments on a given post and update the database. HINT: `rails g migration AddCommentsToPosts comments:integer`

11. Check your `schema.rb` file to make sure `comments` was added to the table.

12. Use the console to iterate over all the posts, and update the number of comments to be a random number between 1 and 100. HINT: `random(1..100)` HINT2: Use the `find_each` method because it will retrieve 1000 records at a time and will not overwhelm memory.

13. Select all posts with more than 97 comments.

14. Select all posts with 45 comments.

15. Order the posts with the oldest posts on top.

16. Order the posts from the posts with the least comments to the posts with the most comments.

17. Select the first 25 posts starting at the 500th post.

18. Sort the posts by the number of comments each post has. HINT: `group`
