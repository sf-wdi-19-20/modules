class Pet
	# name attribute that I care about
	attr_accessor :name
	attr_reader :poos_how_often #getter

	# class variables
	@@count = 0
	@@new_pet_message = "You got a new pet!"


	#class method
	def self.count  #getter
		@@count
	end


	# class instance variable
	@num_legs = 4
	# class method getter
	def self.num_legs
		@num_legs
	end


	# another custom class method (not a getter or setter)
	def self.print_all_pet_names
		# we're not really set up for this
		# so skipping for now
		nil
	end
	# we would call it later by saying Pet.print_all_pet_names


	# initialize with a name
	def initialize (name)
		@name = name
		@poos_how_often = "regularly"
		puts @@new_pet_message
		@@count = @@count + 1
	end

	#  custom setter that doesn't actually allow user to change value
	def poos_how_often=(new_poo_schedule)
		puts "You don't even know."
	end

	# does pet need to go outside?
	def need_to_go_out?
		if @poos_how_often == "regularly"
			false
		else
			true
		end
	end

	# replaced by attr_accessor
	# def name  #getter
	# 	@name
	# end
	# def name=(new_name) #setter
	# 	@name = new_name
	# end
end


morocco = Pet.new("Morocco")
p morocco

puts "There are now #{Pet.count} pets!"

mrh = Pet.new("Mr. Hernandez")
p mrh

puts "There are now #{Pet.count} pets!"


class Fish < Pet
	# overrides Pet initalize 
	# to add a line about blurbling
	def initialize(name)
		@name = name
		@poos_how_often = "regularly"
		puts @@new_pet_message
		puts "...it says blurble" # this is what fish say
		@@count = @@count + 1
	end
	
	@num_legs = 0

end

bubbles = Fish.new("Bubbles")
p bubbles

puts "There are #{Pet.count} pets."
puts "There are NOT #{Fish.count} fish."  #uh-oh!



# puts morocco.num_legs # gives an error
puts "Pets have #{Pet.num_legs} legs."

# puts bubbles.num_legs  # gives an error
puts "Fish have #{Fish.num_legs} legs."


