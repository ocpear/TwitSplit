import React, { Component } from 'react';
import styles from './styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

class MessageDisplay extends Component {
    constructor(props) {
        super(props);

        //flag to scroll to the end of view when update a message;
        this.needScrollToEndAfterUpdate = false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        let scrollTop = document.getElementById("messageDisplayContainer").scrollTop;
        let clientHeight = document.getElementById("messageDisplayContainer").clientHeight;
        let scrollHeight = document.getElementById("messageDisplayContainer").scrollHeight;
        if(scrollTop + clientHeight === scrollHeight) {
            this.needScrollToEndAfterUpdate = true;
        }
        return true;
    }
    componentDidUpdate() {
        if(this.needScrollToEndAfterUpdate) {
            let clientHeight = document.getElementById("messageDisplayContainer").clientHeight;
            let scrollHeight = document.getElementById("messageDisplayContainer").scrollHeight;
            document.getElementById("messageDisplayContainer").scrollTop = scrollHeight - clientHeight;
            this.needScrollToEndAfterUpdate = false;
        }
    }


    render = () => {
        const { classes } = this.props;
        return (
            <div
                id={"messageDisplayContainer"}
                className={classes.messageDisplayContainer}
                onClick={e => { this.setState({}) }}
            >
                {this.props.message.map((message, index) =>
                    <div key={"messageDisplay" + index}>
                        <p className={classes.text} >
                            {message}
                        </p>
                    </div>
                )}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    message: state.message,
});
MessageDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps)
)(MessageDisplay);