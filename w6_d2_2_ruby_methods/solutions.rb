#Challenge Set 1: Primes

def is_prime?(num)
	if num > 1
		(2..(num-1)).each do |i|
  			if num % i === 0
  				return false
  			end
		end
		true
	else
		false
	end
end

# puts is_prime?(19)


# Write a method that takes in a number 
# and returns a list of all prime numbers 
# up to the given number.

def primes_up_to(num)
	primes = []
	if num > 1
		(2..num).each do |i|
			if is_prime?(i)
				primes.push(i)
			end
		end
	end
	primes
end

# p primes_up_to(17)

# Challenge Set 2: Command Line Interaction

# Write a method called get_contact that
# takes a contacts hash,
# prompts the terminal for a new name and a phone number,
# and then adds the name and phone as a key value pair respectively
# only if name is not already a contact name,
# and returns the updated contacts hash.

def get_contact(contacts)
	puts "What is your name?"
	name = gets.chomp
	puts "What is your phone number?"
	phone = gets.chomp.to_i
	if not contacts[name]
		contacts[name] = phone
	end
	contacts
end

# since I want the keys to be strings, have to use =>
# otherwise ruby will convert these names to symbols
# puts get_contact({"Bill"=>4, "Jenny"=>8675309})
 

# Using Array#map, write a method called get_responses 
# that takes an array of questions (strings) 
# and returns an array of responses input from the console 
# for each question.

def get_responses(questions)
	responses = []
	for question in questions
		puts question
		response = gets.chomp
		responses.push(response)
	end
	responses
end

# puts get_responses(["Who's a good dog?", "WHAT HAVE YOU DONE!?"])



# Stretch Challenges


# Make your is_prime? method more efficient. 

def is_prime?(num)
	if num > 1
		maxn = num**(0.5)
		i = 2
		while i <= maxn
  			if num % i === 0
  				return false
  			end
  			i = i+2
		end
		true
	else
		false
	end
end

# puts is_prime?(17)

# Guessing Game

def guessing_game
	puts "Guess a number between 1 and 100"
	correct = Random.new.rand(1..100)
	num_guesses = 1
	current_guess = gets.chomp.to_i

	while current_guess != correct
		if current_guess > correct 
			puts "The number is lower than #{current_guess}. Guess again"
		elsif current_guess < correct
			puts "The number is higher than #{current_guess}. Guess again"
		end
		current_guess = gets.chomp.to_i
		num_guesses = num_guesses + 1
	end
	puts "You guessed #{correct} in #{num_guesses} tries!"
end

# guessing_game


# Write a method to reverse a string in-place.
# Use only a while loop and indices.

def reverse(str)
	i = 0
	while i < str.length / 2
		tmp = str[i]
		str[i] = str[str.length-1-i]
		str[str.length-1-i] = tmp
		i += 1
		# puts str
	end
end

# a = "kittens"
# puts reverse(a)
# puts a

# Rewrite factorial without recursion.

def iterative_factorial(num)
	if num < 0
		return Float::NAN  # a constant meaning "Not a Number"
	end
	memo = 1
	(1..num).each do |i|
		memo = memo*i
	end
	memo
end

puts iterative_factorial(0)


