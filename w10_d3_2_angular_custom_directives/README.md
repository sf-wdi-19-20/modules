# Custom & External Angular Directives

| Objectives |
| :--- |
| Make your own custom Angular directives |
| Add external Angular directives to your project |

# Challenges

## Base Challenges

1. Make a new Angular app, and add the <a href="http://ajbraus.gitbooks.io/wdi-homework/content/angular-custom-directives.html#making-your-own-directive" target="_blank">`currentWeather` directive</a> from the <a href="http://ajbraus.gitbooks.io/wdi-homework/content/angular-custom-directives.html">Angular Directives reading</a>.

2. Pull out the template into a different file and use the `templateUrl` option.

3. Improve the template and show more information from inside the `weather` JSON.

4. Add the <a href="https://github.com/TheSharpieOne/angular-validation-match" target="_blank">angular-validation-match</a> directive to validate that a password field matches a password confirmation field. **Hint:** Add the <a href="https://github.com/TheSharpieOne/angular-validation-match/blob/master/dist/angular-validation-match.min.js" target="_blank">source file</a> to your app, then link to it using a `<script>` tag in your `index.html`. You'll also need to add `'validation.match'` as a dependency in your Angular app.

5. Add the <a href="https://github.com/allenhwkim/angularjs-google-maps" target="_blank">ngMap</a> directive to display a map in your app centered on SF. <a href="http://allenhwkim.tumblr.com/post/70986888283/google-map-as-the-simplest-way" target="_blank">This blog post</a> has some very helpful examples.

## Evening Challenges

1. Create a directive called `five-day-forecast` that fetches and displays the five day forecast from the <a href="http://openweathermap.org/forecast5" target="_blank">openweathermap api</a>.

2. Add the <a href="https://github.com/urish/angular-moment" target="_blank">angular-moment</a> directive to show a date and time in your app that ticks down by the second.

3. Find and implement an edit-in-place directive.

4. Come up with an idea for a custom directive and implement it. For a bonus, use an external API like the weather example above.
