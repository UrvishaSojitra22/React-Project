const initialState = {
  products: [],
  product: null,
  isLoading: false,
  isError: "",
  isCreated: false,
  isUpdated: false,
};

export const productReducer = (state = initialState, action) => {
  console.log("ACTION RECEIVED:", action);

  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        isCreated: true,
        isLoading: false,
        isError: "",
      };

    case "ADD_PRODUCT_REJECTED":
      return {
        ...state,
        isCreated: false,
        isLoading: false,
        isError: action.message,
      };

    case "GET_ALL_PRODUCT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        isCreated: false,
        isError: "",
        isUpdated: false,
      };

    case "GET_ALL_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isCreated: false,
        isError: action.message,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
        isError: "",
      };

    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        product: action.payload,
        isError: "",
      };

    case "GET_PRODUCT_REJECTED":
      return {
        ...state,
        isError: action.message,
      };

    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        product: null,
        isUpdated: true,
        isError: "",
      };

    default:
      return state;
  }
};
