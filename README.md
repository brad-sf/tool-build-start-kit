BuildersStarterKit
==================

## Compiling build files requires:

Ruby - https://www.ruby-lang.org/en/downloads/
NPM - https://www.npmjs.com/
Gulp - https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

## To set up:
During build only phase we can run `vagrant up` from root directory to boot up a vagrant dev box for building, `http://localhost:8080`.

Run `npm install` (or `sudo npm install`) from `Project.Web/build-source` to install locally the required packages. Note these are not to be tracked in SCM.

Run `gulp` from the `Project.Web/build-source` directory. JS & CSS will compile into the `Project.Web` folders /css and /js.

### Help notes:
`npm install` will read the `package.json` file and install all
the required packages into the `node_modules` folder (not tracked).
`gulp` will read the `gulpfile.js` and run the SASS and JS compiling
and concatenating commands.


## Code
Preferrably use tabs for indentation (for best compatability with devs using Visual Studio).


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
Enable for on production and launch.


### Image names
Images used within the layout need to balance SEO optimised naming practices with practical ease of use file names.
Eg: imagetype-name-color-size.png
`logo-stevewaugh-green-small.png`
`icon-save-black-tiny.png`


### SCSS (SASS)
Autoprefixer is disabled during dev to support sourcemaps. Renable and compile for production.


### Vagrant
`vagrant up` can be used for quick development pre-dev phase.
Vagrant will serve .html file from the Project.Web folder at http://localhost:8080
The Apache in Vagrant is configured to parse .html files with PHP so we can use include script such as `<?php include '_includes/head.html'; ?>`
