# Using AJAX with Rails

Thus far, we've focused on Rails as a server-side architecture, meaning every server request happens synchronously, with a full page refresh.

Even in server-side architecture, we can still use AJAX for any action where we don't want a full page refresh. A good use case for this is "favoriting" a post on a blog, similar to "liking" a post on Facebook.

It would be a pretty bad experience for the user if we had to refresh the page every time we favorited a post, so we'll use AJAX to asynchronously request the server and jQuery to dynamically update the view with new information.

## Model Relationships

Image we're starting with a `1:N` relationship between `users` and `posts`. A user `has_many` posts, and a post `belongs_to` a user. This relationship represents the posts that a user creates.

```ruby
#
# app/models/user.rb
#
class User < ActiveRecord::Base
  has_many :posts, dependent: :destroy
end
```

```ruby
#
# app/models/post.rb
#
class Post < ActiveRecord::Base
  belongs_to :user
end
```

To implement `favorites`, we need to add a `N:N` relationship between `users` and `posts`. The `favorites` table will be our JOIN table, with foreign keys for `user_id` and `post_id`.

Here is what the updated models would look like for `User` and `Post`, and the new model for `Favorite`:

```ruby
#
# app/models/user.rb
#
class User < ActiveRecord::Base
  has_many :posts, dependent: :destroy

  # `has_many through` relationship for favorites
  has_many :favorites, dependent: :destroy
  has_many :favorite_posts, through: :favorites, source: :post
end
```

**Note:** `:favorite_posts` serves as an alias for the posts associated with a user *through* `:favorites`. We can't say a user `has_many :posts`, because that relationship already exists, representing the posts that a user *created*. `:favorite_posts` represents the posts that a user *favorited*. We use the `source` attribute to indicate that `:favorite_posts` are records from the `posts` table in our database.

```ruby
#
# app/models/post.rb
#
class Post < ActiveRecord::Base
  belongs_to :user

  # `has_many through` relationship for favorites
  has_many :favorites, dependent: :destroy
  has_many :users, through: :favorites
end
```

```ruby
#
# app/models/favorite.rb
#
class Favorite < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
end
```

## Favorites Migration

After setting up the relationships between `users`, `posts`, and `favorites`, we need to add foreign keys to the `favorites` migration and run `$ rake db:migrate`.

```ruby
#
# db/migrate/20150817033548_create_favorites.rb
#
class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.belongs_to :user
      t.belongs_to :post
      t.timestamps
    end
  end
end
```

## Route to Create Favorites

Now that we set up our models and migrated our database, it's time to set up a new route to create favorites.

```ruby
#
# config/routes.rb
#
Rails.application.routes.draw do
  resources :favorites, only: [:create]
end
```

## Favorites Controller

In our `FavoritesController`, we'll define a method for `create`. This doesn't look too different from what we've done so far - we're just rendering `json` instead of rendering a view or redirecting.

Note that in the error case (when `@favorite` doesn't save), we want to send over an HTTP error status, which will trigger a failure response in our AJAX call.

```ruby
#
# app/controllers/favorites_controller.rb
#
class FavoritesController < ApplicationController

  def create
    @favorite = current_user.favorites.new(favorite_params)
    if @favorite.save
      render json: @favorite
    else
      render json: { errors: @favorite.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def favorite_params
      params.require(:favorite).permit(:post_id)
    end

end
```

## Link to Favorite in View

In the `posts#index` view, we'll put a link to favorite each post. We're using Bootstrap's glyphicon library to show a filled-in star if the user has already favorited the post and an empty star if the user has not favorited the post.

We put the class `.favorite` on our link, since the next step is to add a click event with jQuery, and we need to be able to select the element. We're also hiding `<%= post.id %>` in the link's `data-id` attribute, since we'll need a way to know which post the user clicked "favorite" for.

```html
<!--
app/views/posts/index.html.erb
-->
<% @posts.each do |post| %>
  <h4><%= post.title %></h4>
  <p><%= post.content %></p>
  <p>
    <!-- show favorite icon if user is logged in -->
    <% if current_user %>
      <a href="javascript:void(0)" class="favorite" data-id="<%= post.id %>">

        <!-- check if user has already favorited this post to show correct star icon -->
        <% if current_user.favorite_posts.include? post %>
          <span class="glyphicon glyphicon-star"></span>
        <% else %>
          <span class="glyphicon glyphicon-star-empty"></span>
        <% end %>
      </a>
    <% end %>

    <span class="favorite-count"><%= post.users.count %></span> favorites
  </p>
<% end %>
```

## AJAX Call to Create Favorite

As mentioned above, we're using the class `.favorite` to add a click event to the "favorite" link. The code below fills in the star when the user clicks "favorite" and sends a `POST` request to the server via AJAX to create the new `favorite` in the database. Once the response comes back from our AJAX call, we update the favorite count in the view.

```js
//
// app/assets/javascripts/favorites.js
//
$(function() {

  $('.favorite').on('click', function() {
    // set variables
    var $favoriteIcon = $(this).find('.glyphicon');
    var $favoriteCount = $(this).next('.favorite-count');
    var count = parseInt($favoriteCount.text());

    // fill in star before ajax call for perceived speed
    $favoriteIcon.removeClass('glyphicon-star-empty').addClass('glyphicon-star');

    // ajax call to create new favorite in db
    $.post('/favorites', {
        favorite: { post_id: $(this).attr('data-id') }
      },
      function(data) {
        console.log(data);
        // update favorite count
        $favoriteCount.text(count + 1);
      }
    )
  });

});
```

## Refactor Favorites Controller

Right now, our code allows a user to favorite a post as many times as they want. This doesn't seem like a very good experience, so we should check to see if a user has already favorited a post before creating a new favorite.

```ruby
#
# app/controllers/favorites_controller.rb
#
class FavoritesController < ApplicationController

  def create
    post = Post.find_by_id(favorite_params[:post_id])

    # check if current_user has already favorited this post
    if current_user.favorite_posts.include? post
      render json: {}, status: :bad_request

    else
      @favorite = current_user.favorites.new(favorite_params)
      if @favorite.save
        render json: @favorite
      else
        render json: { errors: @favorite.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end

  ...

end
```

## Docs & Resources

* <a href="http://guides.rubyonrails.org/layouts_and_rendering.html#using-render" target="_blank">RailsGuides: Using Render</a>
