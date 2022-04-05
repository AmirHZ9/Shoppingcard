const ADD_ITEM = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};
const REMOVE_ITEM = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product,
  };
};
const INCREASE = (product) => {
  return {
    type: "INCREASE",
    payload: product,
  };
};
const DECREASE = (product) => {
  return {
    type: "DECREASE",
    payload: product,
  };
};
const CHECKOUT = (product) => {
  return {
    type: "CHECKOUT",
    payload: product,
  };
};
const CLEAR = (product) => {
  return {
    type: "CLEAR",
    payload: product,
  };
};
export { ADD_ITEM, REMOVE_ITEM, INCREASE, DECREASE, CHECKOUT, CLEAR };
