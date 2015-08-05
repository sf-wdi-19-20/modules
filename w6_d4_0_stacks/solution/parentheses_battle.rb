# Find the winner of an epic Parenthesis battle
# that determines the fate of your code --
# will it work or give an error?!
def battle_for_code(soldiers)
  # implement stack with array
  stack = []

  # iterate through soldiers
  soldiers.each do |s|

    # push left "("
    if s == "("
      stack.push s

    elsif s == ")"
      # only pop if stack is NOT empty
      if !stack.empty?
        stack.pop

      # if stack IS empty, we have found a mismatch, so ")" wins
      else
        return ")"
      end
    end
  end

  # done iterating
  # if still "(" in the stack, "(" wins
  if !stack.empty?
    return "("
  end
  # if we didn't find a "winner", the code will work!
  "tie"
end




# Here's a common approach we saw in class.
# This algorithm determines which side of the battle had more soldiers.
# It *doesn't* solve the parenthesis matching problem, 
# because it treats both ["(", ")"] and [")", "("] as valid code.

# but it's still cool to look at 

def battle_by_numbers(soldiers) 
  # using an array to simulate our stack
  stack = []

  soldiers.each do |s|
    if stack.empty?
      stack.push(s)
    elsif stack[-1] == s #Ruby lets us use negative indices for arrays. This line simulates `stack.peek`.
      stack.push(s)
    else
      stack.pop
    end
  end
  
  if stack.empty?
    "tie"  # implicitly return "tie"
  else
    # The other neat thing about this algorithm is that we can actually figure out
    # the number of extra soldiers on the winning side
    winner = stack.pop
    count = 1
    while !stack.empty?
      stack.pop
      count = count + 1
    end 
    puts "#{winner} won with #{count} extra soldiers!"
    winner  # implicitly return winning symbol
  end
end


# Check out these simple examples to see the differences between how the algorithms act:

sample_input_arr = [ 
                    ["(", ")"],  # valid code, matched numbers
                    [")", "("],  # invalid code, matched numbers
                    ["(", "(", ")"], # ( wins
                    ["(", ")", ")"]  # ) wins
                ]

sample_input_arr.each do |test_input|
  puts "----- #{test_input} battle -----"
  puts "battle for code -- fight! -- #{battle_for_code(test_input)} wins! \n\n"
  puts "battle by numbers -- fight! -- #{battle_by_numbers(test_input)} wins! \n\n"
end
