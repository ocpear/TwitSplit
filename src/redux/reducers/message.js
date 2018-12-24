import types from "../types";

export default (state = [], action) => {
    switch (action.type) {
      case types.ADD_MESSAGE:
        return [
          ...state,
          ...action.message,
        ]
    default:
        return state
    }
}