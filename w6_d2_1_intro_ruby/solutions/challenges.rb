### Base Challenges

## Data Types

# 1. Store your `first_name` in a variable and your `last_name`
# in another variable.
first_name = "Bob"
last_name = "Smith"

# 2. Concatenate your `first_name` and `last_name` variables,
# and store the output in a new variable called `full_name`.
full_name = "#{first_name} #{last_name}"

# 3. Use `.split` to turn your `full_name` variable into an array.
full_name.split

## Loops

# 1. Print (`puts`) "Ruby is awesome!" 50 times. Implement this
# 3 different ways, using:
  # `while`
  i = 0
  while i < 50
    puts "Ruby is awesome!"
    i += 1
  end

  # `for`
  for i in (1..50)
    puts "Ruby is awesome!"
  end

  # `times`
  50.times do
    puts "Ruby is awesome!"
  end

# 2. Save any string to a variable, then create an empty hash called
# count (`count = {}`). Loop through the string, and count occurrences
# of each letter. Store the counts in your hash like this example:
  # For the string `apple`, your `count` hash would look like this:
  # `{a: 1, p: 2, l: 1, e: 1}`.
  str = "banana"
  count = {}
  i = 0
  while i < str.length
    if count[str[i]]
      count[str[i]] += 1
    else
      count[str[i]] = 1
    end
    i += 1
  end

# 3. Write a program that gets user input from the terminal and `puts` it until
# the input is the word `"quit"` or `"q"`.
input = nil
while input != "quit" && input != "q"
  puts input if input
  puts "Enter input here:"
  input = gets.chomp
end

# 4. Write a program that prints the "bottles of beer on the wall" song.
verses = gets.chomp.to_i
while verses > 0
  puts "#{verses} bottles of beer on the wall,"
  puts "#{verses} bottles of beer!"
  puts "Take one down and pass it around,"
  verses -= 1
  if verses == 1
    puts "#{verses} bottle of beer on the wall!"
  elsif verses == 0
    puts "No more bottles of beer on the wall."
  else
    puts "#{verses} bottles of beer on the wall!"
  end
  puts "----------"
end

## Iterators: Each

# 1. Define an array of 4 phrases: `"Hello, world"`, `"OMG"`, `"Ruby"`,
# and `"Pair Programming"`. Use `.each` to iterate over the array and
# `puts` each phrase.
phrases = ["Hello, world", "OMG", "Ruby", "Pair Programming"]
phrases.each do |phrase|
  puts phrase
end

# 2. Iterate over your array of phrases again, but this time, only
# `puts` the phrase if its length 5 letters or longer. Otherwise,
# print a message that the phrase is too short, and include the phrase's
# index in the message (Hint: Look up `.each_with_index`).
phrases.each_with_index do |phrase, index|
  if phrase.length >=5
    puts phrase
  else
    puts "Phrase at index #{index} is too short."
  end
end