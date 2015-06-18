# HTML/CSS Review, UX and Bootstrap
| Objectives |
| :--- |
| Explain why UX is important as a developer |
| Apply basic UX principles to your projects |
| Build a static webpage with HTML and CSS (review) |
| Add the Bootstrap library to your projects |

## Activity (5 mins)
  * Draw your favorite website on the table

## UX & UI
  * UX = User Experience
  * UI = User Interface

**Key Takeaways:**
  * UX refers to layout and user flow
  * UI refers to the visual elements (typography, buttons, forms, etc.)

**Why is UX important?**

As developers, we want to make web applications that are *useable* and make people *happy*.

## Bootstrap
  * [Bootstrap Docs](http://getbootstrap.com/css)
  * CSS library developed by Twitter
  * Best known for responsive grid system

**Why Use Bootstrap:**
  * Powerful tool for quickly implementing UX and responsive design
  * Enforces [semantic CSS class names](https://css-tricks.com/semantic-class-names)
  * Can be [minimal](http://dartjobs.herokuapp.com) or [customized](https://www.stitchfix.com)

**How to Use Bootstrap:**
  * Add the the viewport meta tag and the [Bootstrap CDN](http://getbootstrap.com/getting-started/#download) to the `<head></head>` of your HTML file

  ```
  <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  ```

  * You can also use this [Bootstrap Boilerplate](https://github.com/sf-wdi-19-20/modules/tree/master/1.3-HTMLandCSS/bootstrap_boilerplate) to get started

**Bootstrap Grid System:**
  * `.container` class holds `.row` classes
  * Rows create horizontal groups of columns
  * Site content lives in columns

  ```
  <body>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p>This column takes up half the page.</p>
          </div>
          <div class="col-sm-6">
            <p>And so does this one!</p>
          </div>
        </div>
      </div>
  </body>
  ```

  * Predefined column classes `col-*`
      * `xs-*`, `sm-*`, `md-*`, `lg-*` refer to [targeted device sizes](http://getbootstrap.com/css/#grid-media-queries)
      * Number between `1-12` sets width of `col` on that device and all larger devices


  * The best way to learn about the Boostrap grid system is to [see it in action](https://github.com/sf-wdi-19-20/modules/tree/master/1.3-HTMLandCSS/bootstrap_grid)

## Activities, Pt. 1
1. Create an `index.html` file and add the [Bootstrap CDN](http://getbootstrap.com/getting-started/#download) (or fork this [Bootstrap Boilerplate](https://github.com/sf-wdi-19-20/modules/tree/master/1.3-HTMLandCSS/bootstrap_boilerplate) to get started)
2. Add one `.container`, one `.row`, and three `.col-*` classes (your columns can be any widths that add up to 12)
3. Make sure your three columns stack vertically when you are on mobile (`xs`) devices. (**Hint:** Your column class names will NOT contain `xs`)
4. Add content to your columns (`<h1>`, `<p>`, `<img>`, etc.)
5. Add some [buttons](http://getbootstrap.com/css/#buttons) (you can even put [icons](http://getbootstrap.com/components/#glyphicons) inside!)
6. Add a [nav bar](http://getbootstrap.com/components/#navbar) to the top of your page

## Activities, Pt. 2
1. Add a [form](http://getbootstrap.com/css/#forms) to your page.
2. [Bootsnip](http://bootsnipp.com) ...
