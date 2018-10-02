## Bedrock Mini

### A gulp workflow that does Pug, SCSS w/ autoprefixing, browsersync

One step up from <a href="http://codepen.io">Codepen</a> - work in your local environment using the handiness of Pug for templating, SCSS with autoprefixing and BrowserSync.

* Renders Gulp templates
* Has Browsersync starting a local server
* Compiles SCSS
* Already has references to jQuery and jQuery UI in place, and a script tag to begin your JS

### Folder structure

- js - your javascript
- scss - your scss
- src - your pug files
- images - your images
- dist - your generated website

If you need more power, a styleguide, better navigation between templates, consider <a href="http://bedrock.mono.company/">Bedrock</a>.

### Instructions

Run `npm install` then `gulp` to start working.

Run `gulp build` to create a build.

Make sure browsersync is installed globally: `npm install -g browser-sync`.