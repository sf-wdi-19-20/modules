# Interview Prep
## Control Flow And Queue's


A queue just preserves the order in which items arrived into it. This helps model real world problems around waiting in your turn or in line. 

Directions: Write a ruby script to do the following with a queue. 

Scenario: you have a store and you're writing a script to help calculate a quick receipt. The one problem is that every `3rd` and `5th` item a customer buys is on sale. Every `3rd` item is `10%` off and every `5th` item is `20%` off, but also, an item that is both a `3rd` and `5th` item is `30%` off.

Your program should run in a loop to prompt a cashier for the names of the item and their price, and then if their are anymore items.

Hint 1: use a hash to store the `name` and `price` together and put them on the queue.
Hint 2: an array can be a queue if you just use `shift` and `push` as your `enqueue` and `dequeue` respectively.

## First Solution

```ruby
puts "Welcome Please Enter Your Items"

continue = true
queue = []

while continue
  item = {}

  print "Item Name: "
  item[:name] = gets.chomp
  print "Item Price: "
  item[:price] = Float(gets.chomp)
   queue.push item


  puts "Any More Items (y/n)?"
  res = gets.chomp

  continue = res == "y" ? true : false

end


count = 0
sum = 0

until queue.empty?
  item = queue.shift
  count += 1

  discount = 0

  if count % 15 == 0
    discount += -(0.3)
  elsif count % 5 == 0
    discount += -(0.2)
  elsif count % 3 == 0
    discount += -(0.1)
  end

  item[:price] += item[:price]*discount
  
  puts "#{item[:name]}.... #{item[:price]}"
  
  sum += item[:price]
end

puts "\n\nTotal.... #{sum}"
```

## Refactor With Functions

```ruby


puts "Welcome Please Enter Your Items"


def collect_items()

  continue = true
  queue = []

  while continue
    item = {}

    print "Item Name: "
    item[:name] = gets.chomp
    print "Item Price: "
    item[:price] = Float(gets.chomp)
     queue.push item


    puts "Any More Items (y/n)?"
    res = gets.chomp

    continue = res == "y" ? true : false

  end

  queue
end

def calc_total(item_queue)
  total = 0
  count = 0
  until item_queue.empty?
    count += 1
    total = yield(item_queue.shift, total, count)
  end

end


def fiz_discount(count)

  discount = 0

  if count % 15 == 0
    discount += -(0.3)
  elsif count % 5 == 0
    discount += -(0.2)
  elsif count % 3 == 0
    discount += -(0.1)
  end

  discount
end

total = calc_total(collect_items) do |item, total, count|

  discount = fiz_discount(count)

  item[:price] += item[:price]*discount

  puts "#{item[:name]}.... #{item[:price]}"

  total += item[:price]
end

puts "\n\nTotal.... #{total}"

```
