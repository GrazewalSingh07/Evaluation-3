import axios from "axios";

// actions
 export const FETCH_POST = "FETCH_POST";
 export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
 export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";


// action creators
const fetchPostRequest = query => {
  console.log("fetch post request action called");
  return {
    type: FETCH_POST,
    query: query || ""
  };
};

const fetchPostSuccess = data => {
  console.log("fetch post success action called");
  return {
    type: FETCH_POST_SUCCESS,
    data: data
  };
};

const fetchPostFailure = error => {
  console.log("fetch post failure action called");
  return {
    type: FETCH_POST_FAILURE,
    error: error
  };
};

// action to fetch the data 
const fetchData = () => (dispatch,page) => {

    return axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(res => {
        console.log("response success", res.data);
        
        return dispatch(fetchPostSuccess(res.data));
      })
      .catch(err => dispatch(fetchPostFailure(err)));
  };


// export
export {
  fetchData
};