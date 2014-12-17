BuildersStarterKit
==================

## Compiling build files requires:

Ruby - https://www.ruby-lang.org/en/downloads/
NPM - https://www.npmjs.com/
Gulp - https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

## To set up:
Run `npm install` (or `sudo npm install`) from project root

Run `gulp`

## Notes:
`npm install` will read the `package.json` file and install all
the required packages into the `node_modules` folder (not version controlled)
`gulp` will read the `gulpfile.js` and run the SASS and JS compiling
and concatenating commands


## CSS
Style guidelines of [cssguidelin.es](http://cssguidelin.es/)
Comment more to give context and understanding for those who may inherit this project at a later date
BEM-style naming for .classes and $variables
.block-name
.block-name__element
.block-name__element--modifier
$color__brand--primary

Functions/Mixins: lowerCamelCase


### LiveReload
Gulp will LiveReload on compile. Install the [Chrome LiveReload extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei), run `gulp` and connect/activate the extension.


### Robots.txt
Currently set to disable all robots for development.
Enable for on production or launch.
