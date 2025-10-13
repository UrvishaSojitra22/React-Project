export const addNewProduct = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}

export const getAllProducts = () => {
    return {
        type: "GET_ALL_PRODUCT"
    }
}

export const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export const getProduct = (id) => {
    return {
        type: "GET_PRODUCT",
        payload: id
    }
}

export const updateProduct = (data) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: data
    }
}

// const loading = () => {
//     return {
//         type: "LOADING"
//     }
// }

// middleware
// export const getAllProductsAsync = () => {
//     return (dispatch) => {
//         dispatch(loading());
//         setTimeout(() => {
//             dispatch(getAllProducts());
//         }, 500);
//     }
// }
