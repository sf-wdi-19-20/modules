# Solutions

## Think, Pair, Share

1. `User.where(last_name: "Hendrickson")`
2. `Aritcle.where(id: 54..67)` <-- exclusive of 67, three dots (...) is inclusive
3. Answer.where("upvotes > ?", 100)
4. Article.all

## Challenges
### Queries
1. ```console
$ rails new database_queries
$ cd database_queries
$ rails g model Post title:string body:text
```

2. ```rake db:migrate```

3.
```ruby
3000.times do |counter|
    Post.create(:title => "This is the title for post #{counter + 1}", :body => "This is the body for post #{counter + 1}")
end
```
4. ```Post.find(489)```

5. ```Post.last```

6. ```Post.first```

7. ```ruby
Post.find(478, 1134)
# OR
Post.find([478, 1134])```

8. `Post.find((100..105).to_a)`

9. `rails g migration AddCommentsToPosts comments:integer`

10. n/a

11. ```ruby
Post.find_each do |post|
      post.comments = rand(1..100)
      post.save!
    end```

12. `Post.where("comments > ?", 97)`

13. ```ruby
Post.where(:comments => 45)
# OR
Post.where("comments = ?", 45)
```

14. `Post.order("created_at DESC")`

15. `Post.order("comments ASC")`

16. `Post.limit(25).offset(500)`

17. `Post.group("comments")`
