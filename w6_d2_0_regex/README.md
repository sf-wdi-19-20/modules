# Regular Expressions

> <a href="http://ruby-doc.org/core-2.2.0/Regexp.html" target="_blank">Ruby Regexp</a>

Regular expressions (**regex** or **regexps**) are patterns which describe the contents of a string. They’re used for testing whether a string contains a given pattern or extracting the portions that match. Common examples of regexps are "find-and-replace" operations and string format validation (i.e. phone numbers or email addresses).

Many programming languages have regexp capabilities built-in, and Ruby is one of them. Today we'll use regexps to match string patterns in Ruby.

## Defining and Matching

Regexps are bounded by forward-slashes (`/`). **For example:**

```ruby
/hello/
```

To test if a string matches the pattern of a regexp, we use `.match`. **For example:**

```ruby
# returns match data if any
/san/.match("san francisco") #=> #<MatchData "san">

# returns nil if no match data
/san/.match("San Francisco") #=> nil
```

## Basic Regexp Patterns

For a more complete list of basic regex patterns, see <a href="http://rubular.com" target="_blank">Rubular's Regex quick reference</a>.

```ruby
/[abc]/ #=> a single character of: a, b, or c

/\A/ #=> start of string

/\s/ #=> any whitespace character

/\d/ #=> any digit (number)

/(a|b)/ # => a or b
```

## Challenges

Use <a href="http://rubular.com" target="_blank">Rubular</a> for all challenges *except* Base Challenge #1.

### Base Challenges
1. In the terminal, type `irb` (you're now in the ruby console!). Type `/hello world/.class`. What does it return? Note: To exit `irb` in the terminal, simply type `exit`.

2. Write a regexp to match instances of "regex" in the text below. Copy and paste the text (including the HTML tags!) into Rubular as the test string.

  ```html
  <p>A Regular Expression (regex or regexp for short) is a special text string for describing a search pattern.
  You can think of regular expressions as <span>wildcards</span> on steroids. You are probably familiar with wildcard
  notations such as *.txt to find all text files in a file manager. The regex equivalent is <span>\.txt\</span></p>
  ```

3. With the same test string (text above), write a regexp to match instances of "regex", "regexp", or "regular expression".

4. Edit the regexp you just wrote to make sure it's case-insensitive (i.e. it should match "Regular Expression" as well as "regular expression").

### Stretch Challenges

1. Again using the same text, write a regexp to match all html tags (`<p></p> or <span></span>`). **Hint:** You must escape all forward-slashes (`/`) with a back-slash (`\`), like this `\/`.

2. Write a regexp to validate a phone number.

3. Write a regexp to validate an email address.
