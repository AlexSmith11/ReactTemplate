import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './app.scss';

// Note: We export both the standard component AND the connected component
//       so we can run tests on the component without the connection
//       getting in the way.
export class App extends Component {
  constructor(props) {
    super(props);
    this.bindMethods();
  }

  bindMethods() {
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const appProps = {
      className: 'app',
      onClick: this.onClick
    };

    return (
      <div {...appProps}>
        <span>Click to make number go up: {this.props.clicks}</span>
      </div>
    );
  }

  onClick(e) {
    this.props.dispatch({
      type: 'SET_CLICKS',
      value: this.props.clicks + 1
    });
  }
}

function mapStateToProps(state) {
  return { clicks: state.clicks.value };
}

export default connect(mapStateToProps)(App);
