import React, { Component } from 'react';
import { Snackbar, SnackbarContent, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles'

class Notification extends Component {
  static VARIANT_SUCCESS = "success";
  static VARIANT_WARNING = "warning";
  static VARIANT_ERROR = "error";
  static VARIANT_INFO = "info";

  constructor(props) {
    super(props);

    this.state = {
      inputData: ""
    }
  }
  render = () => {
    const { classes, className } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={this.props.message ? true : false}
        message={this.props.message}
        variant={this.props.variant}
        onClose={this.props.onClose}
        autoHideDuration={5000}
      >
        <SnackbarContent
          className={classes[this.props.variant] + " " + className}
          message={
            <span id="client-snackbar" className={classes.message}>
              {this.props.message}
            </span>
          }
        />
      </Snackbar>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf([
    Notification.VARIANT_SUCCESS,
    Notification.VARIANT_WARNING,
    Notification.VARIANT_ERROR,
    Notification.VARIANT_INFO])
};

export default withStyles(styles)(Notification);