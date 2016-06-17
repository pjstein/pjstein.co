//
// (c) 2016-XX, PJ$
// me@pjstein.co
// home.base
//
// core/main.js
//

'use strict';

const BrowserHistory = require('react-router').browserHistory;
const ReactDOM       = require('react-dom');
const Router         = require('react-router').Router;
const Routes         = require('./routes');
const React          = require('react');

// Reset the styles no matter what.
require('normalize.css');

// Constants -------------------------------------------------------------------
const ROOT_NODE = document.getElementById('root');

// Exports ---------------------------------------------------------------------
module.exports = () => {
  console.log('Your main function is empty, silly goose.');
  ReactDOM.render(<Router routes={ Routes } history={ BrowserHistory } />, ROOT_NODE);
}
