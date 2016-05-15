//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/main.js
//

'use strict';

// Reset the styles no matter what.
require('normalize.css');

// Constants -------------------------------------------------------------------
const ROOT_NODE = document.getElementById('root');

// Exports ---------------------------------------------------------------------
module.exports = () => {
  console.log('Your main function is empty, silly goose.');
  ROOT_NODE.innerHTML = 'keep shit hella wild';
}