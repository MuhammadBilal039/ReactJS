const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_PRODUCT") {
    console.log("add to product in reducer", action.payload);
    return state;
  } else {
    return state;
  }
};

export default productReducer;
