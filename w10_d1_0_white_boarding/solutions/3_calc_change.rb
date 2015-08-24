# Problem 3 - Calculate Change

def calc_change(cost, money)
  cost *= 100
  money *= 100

  change_types = {
    '$20s' => 2000,
    '10s' => 1000,
    '$5s' => 500,
    '$1s' => 100,
    'quarters' => 25,
    'dimes' => 10,
    'nickels' => 5,
    'pennies' => 1,
  }
  total_change = money - cost
  change_counts = {}

  # iterate through change_types
  change_types.each do |name, value|
    # calculate count of change_type needed
    count = (total_change / value).floor
    # save count in change_counts hash with name as key
    change_counts[name] = count
    # subtract amount of current change_type from total_change
    total_change -= count * value
  end

  change_counts
end