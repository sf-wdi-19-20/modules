# Problem 2 - Greatest Difference

# Solution 1 - nested for loops (O(n^2) time)
def greatest_diff(array)
  max_diff = 0

  i = 0
  while (i < array.length)
    j = 0
    while (j < array.length)
      if array[i] - array[j] > max_diff
        max_diff = array[i] - array[j]
      end
      j += 1
    end
    i += 1
  end

  max_diff
end

# Solution 2 - single for loop (O(n) time)
def greatest_diff(array)
  min = Float::INFINITY
  max = -Float::INFINITY

  array.each do |num|
    if num < min
      min = num
    elsif num > max
      max = num
    end
  end

  max - min
end