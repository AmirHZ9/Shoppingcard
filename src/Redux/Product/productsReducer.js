const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "PRODUCT_FAILUR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
