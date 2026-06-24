import { constants } from "./constants";

export const incrementAction = () => {
  return {
    type: constants.INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: constants.DECREMENT,
  };
};

export const resetAction = () => {
  return {
    type: constants.RESET,
  };
};
