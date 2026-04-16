![Screen recording of the logo morphing back and forth](assets/banner.gif)

# 12k Logo Morph

I recently created a new version of [Taylor Deupree](https://www.taylordeupree.com)'s website, about 14 years after I made his last one. Taylor is a brilliant musician, runs the record label [12k](https://www.12k.com), and works as a mastering engineer at [12k Mastering](https://www.12kmastering.com). He is also a designer and created the legendary 12k logo based on the floppy disc. Years later when he started 12k Mastering he created a new logo that is a rounded version of the original. For his new website, I wanted a way to show the relation between the two and create a unified user interface that allows the user to access either external site and see the accompanying logo.

## The Challenge 

The obvious solution would be to animate a single SVG. But because the logos, which are visually similar, were created years apart the paths had no relation to one another. This meant that during the morph between states, the logo would blow up into a tangled mess before reforming in its new state.

## The Solution

As I looked at the logos, I realized I could easily recreate either of them using the same HTML with minor changes to the CSS. That also allowed me to create a simple transition to morph between the states. In honor of the floppy disc that inspired the logo, I used the anatomy of the floppy disc as my classes: `index-hole`, `relief-notch`, `head-access-slot`, `drive-spindle-hole`, and `write-protect-notch`. You can view the [CSS](src/style.css) and the [JS](src/script.js), or the live demo below.

### HTML

Here is an example of the HTML:

````html
<div id="logo" class="twelve-k">
    <span class="index-hole"></span>
    <span class="relief-notch"></span>
    <span class="head-access-slot"></span>
    <span class="drive-spindle-hole"></span>
    <span class="write-protect-notch"></span>  
</div>
````

## Live Demo

[https://3ndesign.github.io/12k/demo/](https://3ndesign.github.io/12k-logo-morph/demo/)

## Credits

Logos by [Taylor Deupree](https://www.taylordeupree.com), code by [Yann Novak](https://github.com/yannnovak).

## Project Structure
```
12k/
├── assets/
│   └── banner.gif
├── demo/
│   └── index.html        # Demo
├── src/
│   ├── script.js         # Script
│   └── style.css         # Style
└── README.md
```