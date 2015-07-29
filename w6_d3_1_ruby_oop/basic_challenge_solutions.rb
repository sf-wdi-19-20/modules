class Monster

  # getters and setters for instance variables
  attr_accessor :threat_level, :habitat

  
  # class variables
  @@count = 0

  # class instance variable
  # NOT in challenges but added for demo purposes
  @class_description = "A scary monster!"

  # initial behavior

  def initialize(name="monster", threat_level=:meh)
    puts "Rawr!"
    @threat_level = threat_level
    @@count = @@count + 1
    puts "#{@@count} monsters now roam the world!"
  end

  # class method getter for @@count class variable
  def self.count
    @@count
  end

  # class method getter for @is_scary? class instance variable
  def self.class_description
    @class_description
  end

  # instance method
  def habitat?(some_hab)
    @habitat == some_hab
  end
  
  # instance method
  def lets_get_dangerous
    if @threat_level == :meh
      @threat_level = :semi_danger
    elsif @threat_level == :semi_danger
      @threat_level = :super_danger
    else
      @threat_level = :threat_level_midnight
    end
  end
end


class Zombie < Monster

  # zombie version of class_description
  @class_description = "Shuffling, decaying flesh. Hungry and without remorse!"

  # we'll use the reserved word super (shoutout Jason!)
  # to call Monster's initialize and keep our code more DRY
  def initialize(name="zombie", threat_level=:semi_danger)
    # note that zombies created without a threat level
    # will have a default threat_level of :semi_danger
    super(threat_level)  
    @habitat = "graveyard"
  end
end

class Warewolf < Monster

  # warewolf version of class_description
  @class_description = "A man... a wolf... a monster!"

  def check_threat_level(full_moon=false)
    if full_moon
      @threat_level = :super_danger
    else
      @threat_level = :meh
    end
    @threat_level
  end
end


# kitten = Monster.new(:meh)
# p kitten

# rob = Zombie.new()
# p rob

# teenwolf = Warewolf.new(:meh)
# puts teenwolf.check_threat_level
# puts teenwolf.check_threat_level(true)
