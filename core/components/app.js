//
// (c) 2016-XX, PJ$
// me@pjstein.co
// pjstein.co
//
// core/components/app.js
//

const React = require('react');

// App -------------------------------------------------------------------------
class App extends React.Component {

  render() {
    return (
      <div className="homebase__app">
        { this.props.children }
      </div>
    );
  }

}

// Exports ---------------------------------------------------------------------
module.exports = { App : App };
