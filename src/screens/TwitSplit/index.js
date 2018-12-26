import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import MessageInputter from '../../components/MessageInputter';
import MessageDisplay from '../../components/MessageDisplay';

class TwitSplit extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <MessageDisplay />
        <MessageInputter />
      </div>
    );
  }
}

export default withStyles(styles)(TwitSplit);
