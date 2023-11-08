// suggessions actions.js
import axios from 'axios';
const DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json';
const GOOGLE_MAP_KEY = 'AIzaSyB6UAK96daJgf3quVnWzLTTAZavMNFGkAA';
const latitudeDelta = 0.025;
const longitudeDelta = 0.025;
export const fetchLocation = ({key, title}) => {
  return async dispatch => {
    dispatch(fetchLocationStart());

    try {
      const params = new URLSearchParams({
        key: GOOGLE_MAP_KEY,
        placeid: key,
      });
      const response = await axios.get(`${DETAILS_URL}?${params.toString()}`);
      const result = response.data.result.geometry.location;
      console.log(result);
      dispatch(
        fetchLocationSuccess({
          coordinate: {
            latitude: parseFloat(result.lat),
            longitude: parseFloat(result.lng),
            latitudeDelta,
            longitudeDelta
          },
          key,
          title,
        }),
      );
    } catch (error) {
      dispatch(fetchLocationFailure(error.message));
    }
  };
};

export const resetSuggessions = () => {
  return async dispatch => {
    dispatch(resetSuggessionsSuccess());
  };
};

const fetchLocationStart = () => ({type: 'FETCH_LOCATION_START'});
const fetchLocationSuccess = data => ({
  type: 'FETCH_LOCATION_SUCCESS',
  payload: data,
});
const fetchLocationFailure = error => ({
  type: 'FETCH_LOCATION_FAILURE',
  payload: error,
});
const resetSuggessionsSuccess = () => ({type: 'RESET_LOCATION'});
