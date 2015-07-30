def battle(soldiers)
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

      # if stack IS empty, ")" wins
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
end