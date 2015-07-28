# 4. Let's have an [HTTParty](https://github.com/jnunemaker/httparty)!

#5. Install the httparty gem ```$ gem install httparty```.

#6. Now require it in a new ruby script file, and use it to call an album search on the word "White" to the spotify API.
require 'httparty'

response = HTTParty.get('https://api.spotify.com/v1/search?q=White&type=album')
p response

#7. Can you require both ```httparty``` and ```awesome_print``` to have the output look nice? (remember just require awesome_print and then use ```ap``` instead of ```p```)
require 'httparty'
require 'awesome_print'

response = HTTParty.get('https://api.spotify.com/v1/search?q=White&type=album')
ap JSON.parse(response.body)

#5. In the same file, can you write a loop that returns an array of the album names from your search?
require 'httparty'
require 'awesome_print'

response = HTTParty.get('https://api.spotify.com/v1/search?q=White&type=album')
body =  JSON.parse(response.body)
body["albums"]["items"].each do |a|
  ap a["name"]
end
