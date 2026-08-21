/* Line-by-line "waterfall" reveal for page content.
 * Walks every heading, paragraph, list item, and preformatted block
 * inside the main content area (regardless of nesting depth, e.g.
 * bullets nested inside a single <ul> per job on the Experience page,
 * or the ASCII art <pre> block on the Home page) and staggers an
 * animation-delay on each so they cascade down the page in order.
 */
(function () {
  "use strict";

  var BASE_DELAY = 0.7; // seconds; lines start after masthead/nav/hero/sidebar tier
  var STEP = 0.12; // seconds between each line; slow, deliberate cascade

  var container = document.querySelector(".page__content, .archive");
  if (!container) {
    return;
  }

  var lines = container.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, li, pre"
  );

  lines.forEach(function (el, index) {
    el.classList.add("reveal-line");
    el.style.animationDelay = (BASE_DELAY + index * STEP).toFixed(2) + "s";
  });
})();
