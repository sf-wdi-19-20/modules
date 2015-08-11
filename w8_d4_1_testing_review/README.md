# Testing Review: RSpec, Validations, Flash Messages

* Add rspec-rails to your Gemfile in the development and test groups:

```ruby
#
# Gemfile
#
group :development, :test do
  gem 'rspec-rails'
end
```

* Run bundle install (or bundle for short) in your terminal so that rspec-rails is actually added to your project:

```
$ bundle
```

* Add tests to your rails project using the terminal:

```
rails g rspec:install
```

This creates a spec directory. It also adds spec/spec_helper.rb and .rspec files that are used for configuration. See those files for more information.

* Configure your specs by going into the .rspec file and removing the line that says --warnings if there is one.

* If you created models before adding rspec-rails, create a spec file for each of your models. (This is only necessary if you had a model created before you installed rspec-rails.)

```
$ rails g rspec:model article
```

TODO: rails g rspec:controller?

TODO: notes on running tests

```
$ rails g controller foods
```

```ruby
#
# foods_controller_spec.rb
#
require "rails_helper"

RSpec.describe FoodsController, type: :controller do

  describe "#new" do
    it "should assign @food" do
      get :new
      expect(assigns(:food)).to be_instance_of(Food)
    end

    it "should render the :new view" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "#create" do
    context "success" do
      it "should add new food" do
        foods_count = Food.count
        post :create, food: {name: "banana"}
        expect(Food.count).to eq(foods_count + 1)
      end

      it "should redirect_to 'food_path' on successful create" do
        post :create, food: {name: "banana"}
        expect(response.status).to be(302)
        expect(response.location).to match(/\/foods\/\d+/)
      end
    end

    context "failure" do
      it "should redirect to 'new_food_path' when create fails" do
        post :create, food: {name: nil}
        expect(response).to redirect_to(new_food_path)
      end
    end
  end

end
```

**RUN TESTS**

```
#
# routes.rb
#
resources :foods, only: [:new, :create]
```

**RUN TESTS**

```
#
# foods_controller.rb
#
class FoodsController < ApplicationController

  def new
    @food = Food.new
    render :new
  end

  def create

  end

end
```

```html
#
# views/foods/new.html.erb
#
<div class="row">
  <div class="col-md-6 col-md-offset-3">
    <h1>New Food</h1>
    <hr>
    <%= form_for @food do |f| %>
      <div class="form-group">
        <%= f.text_field :name, placeholder: "Name", autofocus: true, class: "form-control" %>
      </div>
      <%= f.submit "Save Food", class: "btn btn-default" %>
    <% end %>
  </div>
</div>
```

**RUN TESTS**

```
$ rails g model food name
$ rake db:migrate
```

**RUN TESTS**

```ruby
#
# foods_controller.rb
#
class FoodsController < ApplicationController

  def new
    @food = Food.new
    render :new
  end

  def create
    food = Food.new(food_params)
    if food.save
      redirect_to food_path(food)
    else
      redirect_to new_food_path
    end
  end

  private
    def food_params
      params.require(:food).permit(:name)
    end

end
```

**RUN TESTS**

```ruby
#
# routes.rb
#
resources :foods, only: [:new, :create, :show]
```

**RUN TESTS**

```ruby
#
# food.rb
#
class Food < ActiveRecord::Base
  validates :name, presence: true
end
```

TODO: add length validation

**RUN TESTS** PASSING!!!

## Flash Messages

```ruby
#
# foods_controller.rb
#
def create
  food = Food.new(food_params)
  if food.save
    flash[:success] = "Successfully created food."
    redirect_to food_path(food)
  else
    flash[:error] = food.errors.full_messages.join(", ")
    redirect_to new_food_path
  end
end
```