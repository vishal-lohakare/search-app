import actionTypes from "./actionTypes";
import Webservice from "../../utils/axiosLayer";

export const getSearchResult = (searchQuery, sortBy, pageNo) => {
    let finalUrl = "/search-results"
    if(searchQuery !== "") {
      finalUrl = finalUrl + "?q=" + searchQuery;
    } 
    if(sortBy !== "") {
      finalUrl = finalUrl + "&_sort=" + sortBy;
    }
    if(pageNo !== "") {
      finalUrl = finalUrl + "&_page=" + pageNo;
    }

  return dispatch => {
    dispatch({ type: actionTypes.GET_SEARCH_RESULT_REQUEST });
    Webservice.getData(finalUrl)
      .then(resp => {
        const data = resp.data;
        dispatch({ type: actionTypes.GET_SEARCH_RESULT_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: actionTypes.GET_SEARCH_RESULT_FAILURE, payload: [] });
      });
  };
};

export const getSuggestions = (searchQuery) => {
  let finalUrl = "/suggestions"
  if(searchQuery !== "") {
    finalUrl = finalUrl + "?q=" + searchQuery;
  } 

return dispatch => {
  dispatch({ type: actionTypes.GET_SUGGESTIONS_REQUEST });
  Webservice.getData(finalUrl)
    .then(resp => {
      const data = resp.data;
      dispatch({ type: actionTypes.GET_SUGGESTIONS_SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: actionTypes.GET_SUGGESTIONS_FAILURE, payload: [] });
    });
};
};
