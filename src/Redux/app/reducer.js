import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
  } from "./action";
  
  const initStore = {
    isLoading: false,
    data: [],
    error: ""
  };
  
  const reducer = (state = initStore, action) => {
    console.log("reducer called");
    switch (action.type) {
      case FETCH_POST:
        
        return {
          ...state,
          isLoading: true,
          
        };
      case FETCH_POST_SUCCESS:
       
  
        return {
          isLoading: false,
          data: action.data,
          error: state.error
        };
      case FETCH_POST_FAILURE:
        
        return {
          isLoading: false,
          data: state.data,
          error: action.error
        };
      default:
        
        return state;
    }
  };
  
  export default reducer;