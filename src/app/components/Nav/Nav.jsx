 'use strict';

// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';


var NavTest = React.createClass({
  getInitialState() {
    return {
      open: false
    }
  },
  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  },
  render() {

    return (
      <div>
        <div style={{marginLeft:400}}>
          <RaisedButton
            label="Toggle LeftNav"
            onTouchTap={this.handleToggle}
          />
          <LeftNav open={this.state.open}
          
          >
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </LeftNav>
        </div>
      </div>
      )
  }
});


module.exports = NavTest;