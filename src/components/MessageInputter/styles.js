export default theme => ({
    messageInputterContainer: {
        borderTop: "1px solid black",
        position: "relative",
    },
    messageInput: {
        width: "calc( 100% - 105px)",
        display: "inline-block",
        overflowY: "auto",
        resize:"none",
        padding:2,
    },
    messageSendButton: {
        position: "absolute",
        right: 0,
        height: "100%",
        width: 100,
    },
});