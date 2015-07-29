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

	def self.num_legs
		@num_legs
	end

	def self.print_all_pet_names
	end
	# Pet.print_all_pet_names



	# initialize with a name
	def initialize (name)
		@name = name
		@poos_how_often = "regularly"
		puts @@new_pet_message
		@@count = @@count + 1
		# class instance variable
		@num_legs = 4

	end

	#  custom setter
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

puts Pet.count

mrh = Pet.new("Mr. Hernandez")
p mrh

puts Pet.count


class Fish < Pet
	# overrides Pet initalize 
	def initialize(name)
		@name = name
		@poos_how_often = "regularly"
		puts @@new_pet_message
		@@count = @@count + 1
		@num_legs = 0
	end
end

bubbles = Fish.new("Bubbles")
p bubbles

puts Fish.count  #uh-oh!
puts Pet.count


