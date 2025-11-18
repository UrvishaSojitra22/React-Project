import axios from "axios";
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase.config";

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
    payload: id,
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
  return async (dispatch) => {
    dispatch(loading());

    try {
      let res = await getDocs((collection(db, "megamart")));
      let result = [];
      res.forEach((doc) => {
        const data = doc.data();
        result.push(data);
      })
      dispatch(getAllProducts(result))
    } catch (error) {
      dispatch(getAllProductsRejected(error.message))
    }
    // fetch("http://localhost:3000/products")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(getAllProducts(data)))
    //   .catch((err) => dispatch(getAllProductsRejected(err.message)));
  };
};

export const addNewProductAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      let res = await setDoc(doc(db, "megamart", `${data.id}`), data);
      dispatch(addNewProduct())
    } catch (error) {
      dispatch(addNewProductRejected(error.message))
    }
    // axios
    //   .post("http://localhost:3000/products", data)
    //   .then(() => dispatch(addNewProduct(data)))
    //   .catch((err) => dispatch(addNewProductRejected(err.message)));
  };
};

export const deleteProductAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());

    try {
      await deleteDoc(doc(db, "megamart", `${id}`));
      dispatch(getAllProductsAsync())
    } catch (error) {
      dispatch(addNewProductRejected(error.message))
    }

    // axios
    //   .delete(`http://localhost:3000/products/${id}`)
    //   .then(() => dispatch(getAllProductsAsync()))
    //   .catch((err) =>
    //     dispatch({ type: "DELETE_PRODUCT_REJECTED", payload: err.message })
    //   );
  };
};

export const getProductAsync = (id) => {
  return async (dispatch) => {
    // dispatch(loading());
    // const docRef = doc(db, "megamart", `${id}`);
    try {
      let res = await getDoc(doc(db, "megamart", `${id}`))
      dispatch(getProduct(res.data()))


    } catch (error) {
      dispatch(addNewProductRejected(error.message))
    }
    // axios
    //   .get(`http://localhost:3000/products/${id}`)
    //   .then((res) => dispatch(getProduct(res.data)))
    //   .catch((err) =>
    //     dispatch({ type: "GET_PRODUCT_REJECTED", payload: err.message })
    //   );
  };
};

export const updateProductAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    // axios
    //   .put(`http://localhost:3000/products/${data.id}`, data)
    //   .then(() => dispatch(updateProduct(data)))
    //   .catch((err) =>
    //     dispatch({ type: "UPDATE_PRODUCT_REJECTED", payload: err.message })
    //   );
    try {
      await updateDoc(doc(db, "megamart", `${data.id}`), data)
      dispatch(updateProduct())
    }
    catch (error) {
      dispatch(addNewProductRejected(error.message))

    }

  };
};
