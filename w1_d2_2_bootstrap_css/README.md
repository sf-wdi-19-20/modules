# HTML/CSS Review, UX & Bootstrap
| Objectives |
| :--- |
| Explain why UX is important as a developer |
| Build a static webpage with HTML and CSS (review) |
| Add the Bootstrap library to your projects |

## UX & UI
  * UX = User Experience
  * UI = User Interface

#### Key Takeaways
  * UX encompasses all aspects of the end user's interaction, including product design, usability, and interface layout
  * UI refers to the visual elements (typography, buttons, forms, etc.)

#### Why is UX important?

  As developers, we want to make web applications that are *useable* and make people *happy*.

## Bootstrap
  * [Bootstrap Docs](http://getbootstrap.com/css)
  * CSS library developed by Twitter
  * Best known for responsive grid system

#### Why Use Bootstrap
  * Powerful tool for quickly implementing UX and responsive design
  * Enforces [semantic CSS class names](https://css-tricks.com/semantic-class-names)
  * Can be [minimal](http://dartjobs.herokuapp.com) or [customized](https://www.stitchfix.com)

#### How to Use Bootstrap
  * Add the the viewport meta tag and the [Bootstrap CDN](http://getbootstrap.com/getting-started/#download) to the `<head></head>` of your HTML file

  ```
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  </head>
  ```

  * You can also use this [Bootstrap boilerplate](https://github.com/sf-wdi-19-20/modules/tree/master/w1_d2_2_bootstrap_css/bootstrap_boilerplate) to get started

#### Bootstrap Grid System
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


  * The best way to learn about the Boostrap grid system is to [see it in action](https://sf-wdi-19-20.github.io/modules/w1_d2_2_bootstrap_css/bootstrap_grid/index.html)

## Challenges
  1. Create an `index.html` file and add the [Bootstrap CDN](http://getbootstrap.com/getting-started/#download) (or use this [Bootstrap boilerplate](https://github.com/sf-wdi-19-20/modules/tree/master/w1_d2_2_bootstrap_css/bootstrap_boilerplate) to get started)
  2. Add one `.container`, one `.row`, and three `.col-*` classes (your columns can be any widths that add up to 12)
  3. Make sure your three columns stack vertically when you are on mobile (`xs`) devices. (**Hint:** Your column class names will NOT contain `xs`)
  4. Add content to your columns (`<h1>`, `<p>`, `<img>`, etc.)
  5. Add some [buttons](http://getbootstrap.com/css/#buttons) (you can even put [icons](http://getbootstrap.com/components/#glyphicons) inside!)

## Stretch Challenges
  1. Add a [nav bar](http://getbootstrap.com/components/#navbar) to the top of your page.
  2. Add a [form](http://getbootstrap.com/css/#forms) to your page.
  3. Visit [Bootsnipp](http://bootsnipp.com), and choose any element(s) from the gallery to add to your page. (**Hint:** You will have to add your own stylesheet if any extra CSS is required for the element(s) you choose)

## Further Reading

#### HTML & CSS
  * [Learn CSS Layout](http://learnlayout.com)
  * [WTF, HTML and CSS?](http://wtfhtmlcss.com)
  * [Opening the Box Model](http://learn.shayhowe.com/html-css/opening-the-box-model)
  * [70 Expert Ideas For Better CSS Coding](http://www.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding)

#### Bootstrap
  * [Understanding the Bootstrap Grid System](https://scotch.io/tutorials/understanding-the-bootstrap-3-grid-system)
  * [Inspiring Uses of Bootstrap](http://expo.getbootstrap.com)

#### Other CSS Frameworks
  * [Foundation](http://foundation.zurb.com)
  * [Pure.css](http://purecss.io)

#### UX & UI
  * [UX is UI](https://medium.com/@mikeatherton/ux-is-ui-105460807734)
  * [A Good User Interface](http://goodui.org)
  * [[VIDEO] Designing for Cross-Screen Experiences](http://aneventapart.com/news/post/screen-time-an-event-apart-video-by-luke-wroblewski)
