export default theme => ({
    messageInputterContainer: {
        borderTop: "1px solid #E5E5E9",
        position: "relative",
    },
    messageInput: {
        width: "calc( 100% - 115px)",
        display: "inline-block",
        overflowY: "auto",
        resize:"none",
        padding:"2px 12px",
    },
    messageSendButton: {
        position: "absolute",
        right: 0,
        height: "100%",
        width: 100,
    },
});