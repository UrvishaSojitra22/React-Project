import axios from "axios";


export const addNewProduct = (product) => {
  return {
    type: "ADD_PRODUCT_SUCCESS",
    payload: product,
  };
};
export const addNewProductRejected = (msg) => {
  return {
    type: "ADD_PRODUCT_REJECTED",
    payload: msg,
  };
};



export const getAllProducts = (data) => {
  return {
    type: "GET_ALL_PRODUCT_SUCCESS",
    payload: data,
  };
};

export const getAllProductsRejected = (msg) => {
  return {
    type: "GET_ALL_PRODUCT_REJECTED",
    payload: msg,
  };
};



export const deleteProducReject = (msg) => {
  return {
    type: "DELETE_PRODUCT_REJECTED",
    payload: msg,
  };
};
export const DeleteProduc = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload:id,
  };
};



export const getProduct = (id) => {
  return {
    type: "GET_PRODUCT_SUCCESS",
    payload: id,
  };
};
export const getProductReject = (msg) => {
  return {
    type: "GET_PRODUCT-REJECTED",
    payload: msg,
  };
};





export const updateProduct = (data) => {
  return {
    type: "UPDATE_PRODUCT_SUCCESS",
    payload: data,
  };
};
export const updateProductReject = (msg) => {
  return {
    type: "UPDATE_PRODUCT_REJECTED",
    payload: msg,
  };
};





const loading = () => {
  return {
    type: "LOADING",
  };
};



export const getAllProductsAsync = () => {
  return (dispatch) => {
    dispatch(loading());
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => dispatch(getAllProducts(data)))
      .catch((err) => dispatch(getAllProductsRejected(err.message)));
      };
};

export const addNewProductAsync = (data) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .post("http://localhost:3000/products", data)
      .then(() => dispatch(addNewProduct(data)))
      .catch((err) => dispatch(addNewProductRejected(err.message)));
  };
};

export const deleteProductAsync = (id) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => dispatch(getAllProductsAsync()))
      .catch((err) =>
        dispatch({ type: "DELETE_PRODUCT_REJECTED", payload: err.message })
      );
  };
};

export const getProductAsync = (id) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => dispatch(getProduct(res.data)))
      .catch((err) =>
        dispatch({ type: "GET_PRODUCT_REJECTED", payload: err.message })
      );
  };
};

export const updateProductAsync = (data) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .put(`http://localhost:3000/products/${data.id}`, data)
      .then(() => dispatch(updateProduct(data)))
      .catch((err) =>
        dispatch({ type: "UPDATE_PRODUCT_REJECTED", payload: err.message })
      );
  };
};
