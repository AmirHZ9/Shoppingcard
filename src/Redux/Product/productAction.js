import axios from "axios";
const fetchProductsRequest = () => {
  return {
    type: "PRODUCT_REQUEST",
  };
};
const fetchProductSuccess = (product) => {
  return {
    type: "PRODUCT_SUCCESS",
    payload: product,
  };
};
const fetchProductFailur = (error) => {
  return {
    type: "PRODUCT_FAILUR",
    payload: error,
  };
};

export const fetchApi = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductSuccess(products));
      })
      .catch((error) => {
        const errorMSG = error.message;
        dispatch(fetchProductFailur(errorMSG));
      });
  };
};
