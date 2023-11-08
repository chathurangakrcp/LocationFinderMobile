// locations.js
const initialState = {
  location: {
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    },
  },
  locations: [],
  loading: false,
  error: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION_START':
      return {...state, loading: true, error: null};
    case 'FETCH_LOCATION_SUCCESS':
      return {
        ...state,
        loading: false,
        location: action.payload,
        locations: [...state.locations, action.payload],
      };
    case 'FETCH_LOCATION_FAILURE':
      return {...state, loading: false, error: action.payload};
    case 'RESET_LOCATION':
      return {
        locations: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default locationReducer;
