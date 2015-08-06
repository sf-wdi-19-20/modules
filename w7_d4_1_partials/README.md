# Partials


### Think, Pair, Share

1.  Where in your Rails applications have you used duplicate code?
2.  How has this led to errors?
3.  What do you think Partials are?
4.  How might Partials help programmers?

### Demo

We're going to take a quick look at how to implement a partial into your views.

In this example we will create a partial of a blog form and place that into a **new.html.erb** file and an **edit.html.erb** file.


**new.html.erb**
  ```
  <h1>New Post</h1>

<%= form_for :article do |f| %>
<p>
  <%= f.label :title %><br>
  <%= f.text_field :title %>
</p>

<p>
  <%= f.label :text %><br>
  <%= f.text_area :text %>
</p>

<p>
  <%= f.submit %>
</p>
<% end %>
  ```
**edit.html.erb**
  ```
  <h1>Edit Post</h1>

<%= form_for :article do |f| %>
<p>
  <%= f.label :title %><br>
  <%= f.text_field :title %>
</p>

<p>
  <%= f.label :text %><br>
  <%= f.text_area :text %>
</p>

<p>
  <%= f.submit %>
</p>
<% end %>
  ```

As you can see, the form is exactly the same for both files.  We can take this form and place it inside of a file called **_form.html.erb**.  This file will be located in the same file as your views. Ex. (**/views/posts/_form.html.erb**).

**_form.html.erb**
```
<%= form_for :article do |f| %>
<p>
  <%= f.label :title %><br>
  <%= f.text_field :title %>
</p>

<p>
  <%= f.label :text %><br>
  <%= f.text_area :text %>
</p>

<p>
  <%= f.submit %>
</p>
<% end %>
```
With this partial you're able to clean up your code and simplify your page.

**new.html.erb**
```
<h1>New Post</h1>

<%= render 'form' %>
```

**edit.html.erb**
```
<h1>Edit Post</h1>

<%= render 'form' %>
```

As you can see you can simply render a partial inside of <erb> tags.  Also note that the partial is not called with an underscore but simply by it's name.

## Other Uses

Partials are not something that is relegated to forms.  You can use partials on anything that is being repeated in your forms.  This includes navbars, headers, footers, and any other thing as well.

You can even use partials that are stored in other files.  You would just need to reference the path in the name.
```
<%= render 'comments/form' %>
```

## Challenges

1.  Take a look at the lab that you worked on last weekend.  Create a partial file for the form that was used in this project.

2.  Look for other elements of your application that can be refactored into partials.  Experiment with implementing partials for these components.
