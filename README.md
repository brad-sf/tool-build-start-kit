BuildersStarterKit
==================

## Compiling build files requires:

Ruby - https://www.ruby-lang.org/en/downloads/
NPM - https://www.npmjs.com/
Gulp - https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
Susy - http://susydocs.oddbird.net/en/latest/install/

## To set up:
Run `npm install` (or `sudo npm install`) from project root

Run `gulp`

## Notes:
`npm install` will read the `package.json` file and install all
the required packages into the `node_modules` folder (not version controlled)
`gulp` will read the `gulpfile.js` and run the SASS and JS compiling
and concatenating commands


### CSS
BEM-style naming
.block-name
.block-name__element
.block-name__element--modifier


### Robots.txt
Currently set to disable all robots for development.
Enable for on production or launch.
