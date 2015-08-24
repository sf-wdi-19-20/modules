# Problem 4 - Shuffle

def shuffle(array)
  current_index = array.length - 1

  # while there are elements left to shuffle
  while (current_index > 0)
    # pick a random index in the elements that remain
    random_index = rand(current_index)

    # swap element at current_index with element at random_index
    temp_value = array[current_index];
    array[current_index] = array[random_index];
    array[random_index] = temp_value;

    # decrease current_index by 1
    current_index -= 1
  end

  array
end