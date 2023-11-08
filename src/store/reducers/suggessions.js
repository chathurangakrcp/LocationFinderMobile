// suggessions.js
const initialState = {
  suggessions: [],
  loading: false,
  error: null,
};

const suggessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUGGESSIONS_START':
      return {...state, loading: true, error: null};
    case 'FETCH_SUGGESSIONS_SUCCESS':
      return {...state, loading: false, suggessions: action.payload};
    case 'FETCH_SUGGESSIONS_FAILURE':
      return {...state, loading: false, error: action.payload};
    case 'RESET_SUGGESSIONS':
      return {
        suggessions: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default suggessionReducer;
