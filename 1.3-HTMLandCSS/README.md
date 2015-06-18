# HTML/CSS Review, UX and Bootstrap
| Objectives |
| :--- |
| Explain why UX is important as a developer and apply basic UX principles to your projects |
| Build a static webpage with HTML and CSS (review) |
| Add the Bootstrap library to your projects and use it as a responsive design tool |

## UX & UI
* [Intro Slideshow](https://docs.google.com/presentation/d/11xgm8YHjNZ0MgdVUisMy6F6tSIzcBVFmVT-BRO79F84/edit?usp=sharing)
* UX = User Experience / UI = User Interface

**Key Takeaways:**

   * UX refers to user flow and how users feel about your app / UI refers to the visual elements (typography, buttons, forms, etc.)
   * CSS is one of our primary tools for implementing good UX
   
## Bootstrap
* [Bootstrap Docs](http://getbootstrap.com/css)
* CSS library developed by Twitter
* Includes reset to standardize browser defaults
* Best known for responsive grid system
* Enforces [semantic CSS class names](https://css-tricks.com/semantic-class-names)

**How to Use:**

   * Add the the viewport meta tag and the [Bootstrap CDN](http://getbootstrap.com/getting-started/#download) (Content Delivery Network) to the `<head></head>` of your HTML file

      ```
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ```

   * You can also use this [Bootstrap Boilerplate](https://github.com/sf-wdi-19-20/modules/tree/master/1.3-HTMLandCSS/bootstrap_boilerplate)
   
**The Grid System:**

   * Place rows in a .container (fixed-width) or .container-fluid (full-width).
   * Use rows to create horizontal groups of columns.
   * Columns are immediate children of rows, and site content lives in columns.
   
   ```
   <div class="container">
      <div class="row">
         <div class="col-sm-6"></div>
         <div class="col-sm-6"></div>
      </div>
   </div>
   ```

   * Predefined column classes `col-`
      * `xs-`, `sm-`, `md-`, `lg-` refer to targeted device sizes
      * Number between `1-12` sets width of `col` on that device and all larger devices
      
   * The best way to learn about the Boostrap grid system is to [see it in action](https://github.com/sf-wdi-19-20/modules/tree/master/1.3-HTMLandCSS/bootstrap_grid).
   
## Activities, Pt. 1
1. Create an `index.html` file and add the [Bootstrap CDN](http://getbootstrap.com/getting-started/#download) (or fork this [Bootstrap Boilerplate](https://github.com/sf-wdi-19-20/modules/tree/master/1.3-HTMLandCSS/bootstrap_boilerplate) to get started).
2. Add one `.container`, one `.row`, and three `.col-` classes (your columns can be any widths that add up to 12)
3. Make sure your three columns stack vertically when you are on mobile (`xs`) devices. (**Hint:** Your column class names will NOT contain `xs`)
4. Add content to your columns (`<h1>`, `<p>`, `<img>`, etc.)
5. Add some [buttons](http://getbootstrap.com/css/#buttons) (you can even put [icons](http://getbootstrap.com/components/#glyphicons) inside!)
6. Add a [nav bar](http://getbootstrap.com/components/#navbar) to the top of your page

## Activities, Pt. 2
1. Add a `form` to your page.
2. Visit Bootsnip