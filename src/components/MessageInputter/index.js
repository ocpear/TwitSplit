import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import message from '../../utils/message';
import { Button, TextField } from '@material-ui/core';
import styles from './styles'
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import actions from '../../redux/actions';


const MAX_CHUNK_LENGTH = 10;

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
    
    try {
      let messageSplited = message.splitMessage(this.state.inputData, MAX_CHUNK_LENGTH)
      this.props.addMessage(messageSplited)
      this.setState({
        inputData: ""
      })
    } catch (error) {
      alert(error)
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

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.messageInputterContainer}>
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