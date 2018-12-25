import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import message from '../../utils/message';
import { Button, TextField } from '@material-ui/core';
import styles from './styles'
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Notification from '../Notification';


const MAX_CHUNK_LENGTH = 50;

class MessageInputter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.inputData) {
      return;
    }

    let messageSplited = message.splitMessage(this.state.inputData, MAX_CHUNK_LENGTH)

    if (Array.isArray(messageSplited)) {
      this.props.addMessage(messageSplited)
      this.setState({
        inputData: ""
      })
    } else {
      this.setState({
        notify: messageSplited,
        notifyVariant: Notification.VARIANT_ERROR,
      })
    }
  }

  handleChange = (e) => {
    if (e.target.value === this.state.inputData) {
      return;
    }
    this.setState({
      inputData: e.target.value
    });
  }

  handleCloseNotify = (event, reason) => {
    this.setState({
      notify: undefined,
      notifyVariant: undefined,
    })
  }

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.messageInputterContainer}>
        <Notification
          variant={this.state.notifyVariant}
          message={this.state.notify}
          onClose={this.handleCloseNotify}
        />
        <form onSubmit={this.handleSubmit} >
          <TextField
            placeholder="Please write something!"
            className={classes.messageInput}
            value={this.state.inputData}
            fullWidth={true}
            InputProps={{
              disableUnderline: true
            }}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.messageSendButton}
          >
            Send!
          </Button>
        </form>
      </div>
    );
  }
}

MessageInputter.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addMessage: (message) => dispatch(actions.addMessage(message)),
});

export default compose(
  withStyles(styles),
  connect(undefined, mapDispatchToProps)
)(MessageInputter);