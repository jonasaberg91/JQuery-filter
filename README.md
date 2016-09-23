# JQuery-filter
Simple, fast JQuery filter with fade effects to filter your content
## Get Started
In this example I am using a select tag with two option values. Filter.js will loop through and count the elements in the list and print them out. The hiding/showing of items are done by css, two classes are applied: hide (display: none) and show (display block).

Lastly, the msg variable is printed out showing the number of items in a list, and an eventlistener (change) is added on the select tag to listen on selected option tag.

### Example HTML markup for looping through elements and set id's and classes to hide and show the elements in the fun function.
```
<html>
  <div class="container">
    <div class="item"> <!-- this div will be looped and saved in the variable elements -->
      <h2 class="headline">Title</h2>
      <span class="platform">Platform</span> <!-- in this example, filter.js will filter based upon what platform is selected e.g MacOS, Windows or Linux -->
      <span class="subHeadline">Sub Title</span>
    </div>
  </div>
</html>
```

### Example HTML markup for event listener and printing out items in the loop.
```
<html>
  <div class="filter">
    <div id="field-count"></div> <!-- print out amount of items in msg variable
    <select id="sel">
      <option value="selected">Sort By:</option>
      <option value="value-one"><option> <!-- option values for event listener to fire function
      <option value="value-two"><option> <!-- option values for event listener to fire function
    </select>
  </div>
</html>
```

### Example CSS to add a FadeIn effect when we select the option values to fire the fun function.
```
<style>
  .show { /* show */
  display: block;
  opacity:0;  /* make things invisible upon start */
  -webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animation ease-in and repeat it only 1 time */
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:0.35s;
  -moz-animation-duration:0.35s;
  animation-duration:0.35s;
}

.hide { /* hide */
  display: none;
}
</style>
```
Enjoy (:
