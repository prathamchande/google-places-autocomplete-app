// src/store/reducers.js
const initialState = {
    places: [],
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PLACES_SUCCESS':
        return { ...state, places: action.payload, error: null };
      case 'FETCH_PLACES_FAILURE':
        return { ...state, places: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  