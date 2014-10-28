# Creative Links from Codrops

The base markup for these links are like this:

    <nav class="cl-effect-1">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </nav>

Some require additional span or data tags.

## Normal markup

    <a href="#">Link</a>

* No special CSS
    * cl-effect-1 - Brackets
    * cl-effect-4 - Bottom border enlarge
* Needs `position: relative;` on `<a>` links.
    * cl-effect-3 - Bottom line slides/fades in
    * cl-effect-7 - Second border slides up
    * cl-effect-8 - Border slight translate
    * cl-effect-12 - Circle
    * cl-effect-13 - Three circles
    * cl-effect-21 - Borders slight translate
* Needs `position: relative; display: inline-block;` on `<a>` links.
    * cl-effect-6 - Border bottom animation
    * cl-effect-14 - Border switch

## Span & Data

    <a href="#"><span data-hover="RevealText">LinkText</span></a>

* No special CSS
    * cl-effect-2 - 3D rolling links
    * cl-effect-20 - 3D side
* Needs `display: inline-block;` on `<a>` links.
    * cl-effect-5 - Same word slide in
    * cl-effect-19 - 3D side
* Needs `position: relative; display: inline-block;` on `<a>` links.
    * cl-effect-10 - Reveal, push out

## Two Span

    <a href="#"><span>Gossamer</span><span>Sumptuous Heart</span></a>

* Needs `position: relative; display: inline-block;` on `<a>` links.
    * cl-effect-9 - Second text and borders

## Data

    <a href="#" data-hover="Desultory">Desultory</a>

* No special CSS
    * cl-effect-15 - Scale down, reveal
    * cl-effect-16 - Fall down
* Needs `position: relative;` on `<a>` links.
    * cl-effect-11 - Text fill
* Needs `position: relative; display: inline-block;` on `<a>` links.
    * cl-effect-17 - Move up fade out, push border
    * cl-effect-18 - Cross
