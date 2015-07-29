class Monster

  # class variable
  @@count = 0
  # class method
  def self.count
    @@count
  end

  # getters and setters for instance variables
  attr_accessor :threat_level, :habitat

  # initial behavior

  def initialize(threat_level=:meh)
    puts "Rawr!"
    @threat_level = threat_level
    @@count = @@count + 1
    puts "#{@@count} monsters now roam the world!"
  end

  def habitat?(some_hab)
    @habitat == some_hab
  end
  
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

  def initialize(threat_level)
    puts "Rawr!"
    @threat_level = threat_level
    @habitat = "graveyard"
    @@count = @@count + 1
    puts "#{@@count} monsters now roam the world!"
  end

end

class Warewolf < Monster
  def check_threat_level(full_moon=false)
    if full_moon
      @threat_level = :super_danger
    else
      @threat_level = :meh
    end
  end
end


kitten = Monster.new(:safe)
p kitten

rob = Zombie.new(:dangerous)
p rob

teenwolf = Warewolf.new(:meh)
puts teenwolf.check_threat_level
puts teenwolf.check_threat_level(true)