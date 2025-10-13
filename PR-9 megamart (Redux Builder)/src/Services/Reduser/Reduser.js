const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
  product: null,
  isLoading: false,
};

export const productReducer = (state = initialState, action) => {
    console.log("ACTION RECEIVED:", action);

  switch (action.type){
      case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "ADD_PRODUCT":
      let data = JSON.parse(localStorage.getItem("products")) || [];
      data = [...data, action.payload];
      localStorage.setItem("products", JSON.stringify(data));
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "GET_ALL_PRODUCT":
      let GETDATA = JSON.parse(localStorage.getItem("products")) || [];
      return {
        ...state,
        isLoading: false,
        products: GETDATA,
      };

    case "DELETE_PRODUCT":
      let Data = JSON.parse(localStorage.getItem("products")) || [];
      let updateData = Data.filter((v) => v.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(updateData));
      return {
        ...state,
        products: updateData,
      };

    case "GET_PRODUCT":
      let getData = JSON.parse(localStorage.getItem("products")) || [];
      let singleRec = getData.find((v) => v.id === action.payload);
      return {
        ...state,
        product: singleRec,
      };

    case "UPDATE_PRODUCT":
      let GetData = JSON.parse(localStorage.getItem("products")) || [];
      let updatedData = GetData.map((v) =>
        v.id === action.payload.id ? action.payload : v
      );
      localStorage.setItem("products", JSON.stringify(updatedData));
      return {
        ...state,
        product: null,
        products: updatedData,
      };

    default:
      return state;
  }
};
