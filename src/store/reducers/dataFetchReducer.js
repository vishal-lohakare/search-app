import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  searchResultData: {},
  suggestions: {},
};

function dataFetchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.GET_SEARCH_RESULT_REQUEST: {
      return Object.assign({}, state, {});
    }
    case actionTypes.GET_SEARCH_RESULT_SUCCESS: {
      return Object.assign({}, state, {
        searchResultData: action.payload
      });
    }
    case actionTypes.GET_SEARCH_RESULT_FAILURE: {
      return Object.assign({}, state, {
        searchResultData: action.payload
      });
    }
    case actionTypes.GET_SUGGESTIONS_REQUEST: {
      return Object.assign({}, state, {});
    }
    case actionTypes.GET_SUGGESTIONS_SUCCESS: {
      return Object.assign({}, state, {
        suggestions: action.payload
      });
    }
    case actionTypes.GET_SUGGESTIONS_FAILURE: {
      return Object.assign({}, state, {
        suggestions: action.payload
      });
    }    
    default:
      return state;
  }
}

export default dataFetchReducer;
