// create an app that uses the following npm packages
// 1) franc - https://github.com/wooorm/franc
// 2) nodejs-langs - https://github.com/adlawson/nodejs-langs
// and accepts an argument which is a string in some language
// process that string and get the language code for franc
// use nodejs-lang to process the code from franc to print out the language submitted
// add error handling for non matches and bad submissions
// bonus use colors package to change text color of response output

const colors = require('colors');
const franc = require('franc');
const langs = require('langs');