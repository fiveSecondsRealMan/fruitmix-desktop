 'use strict';

// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';
import Base from '../../utils/Base';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

var DialogTest = React.createClass({
    getInitialState() {
        return {
            open: false
        }
    },

    open() {
        console.log('open');
        this.setState({
            open : true
        });
    },

    close() {
        this.setState({
            open: false
        });
    },

    render() {
        const actions = [
          <FlatButton
            label="Cancel"
            secondary={true}
            onTouchTap={this.close}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.close}
          />,
        ];

        return (
                <div>
                <div>
                    <RaisedButton label="Dialog" onTouchTap={this.open} />
                    <Dialog
                      title="Dialog With Actions"
                      actions={actions}
                      modal={false}
                      open={this.state.open}
                      onRequestClose={this.close}
                    >
                      The actions in this window were passed in as an array of React objects.12
                    </Dialog>
                </div>

                <div>
                    <RaisedButton label="Dialog With Custom Width" onTouchTap={this.open} />
                    <Dialog
                      title="Dialog With Custom Width"
                      actions={actions}
                      modal={true}
                      contentStyle={customContentStyle}
                      open={this.state.open}
                    >
                      This dialog spans the entire width of the screen.
                    </Dialog>
                  </div>
                  </div>
            )
    }
});


module.exports = DialogTest;