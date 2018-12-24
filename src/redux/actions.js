import types from "./types";

const addMessage = (message) => {
    return {
        type: types.ADD_MESSAGE,
        message
    };
}

export default {
    addMessage
}