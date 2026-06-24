import { constants } from "../Store/constants";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return { count: state.count + 1 };
    case constants.DECREMENT:
      return { count: state.count - 1 };
    case constants.RESET:
      return { count: 0 };
    default:
      return state;
  }
};
