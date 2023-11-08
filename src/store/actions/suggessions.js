// suggessions actions.js
import axios from 'axios';
const AUTO_COMPLETE_URL =
  'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const GOOGLE_MAP_KEY = 'AIzaSyB6UAK96daJgf3quVnWzLTTAZavMNFGkAA';
export const fetchSuggessions = input => {
  return async dispatch => {
    dispatch(fetchSuggessionStart());

    try {
      const params = new URLSearchParams({
        key: GOOGLE_MAP_KEY,
        input: input,
      });
      const response = await axios.get(
        `${AUTO_COMPLETE_URL}?${params.toString()}`,
      );
      const rersults = response.data?.predictions.map(el => {
        return {
          key: el.place_id,
          title: el.structured_formatting.main_text,
        };
      });
      dispatch(fetchSuggessionSuccess(rersults));
    } catch (error) {
      dispatch(fetchSuggessionFailure(error.message));
    }
  };
};

export const resetSuggessions = () => {
  return async dispatch => {
    dispatch(resetSuggessionsSuccess());
  };
};

const fetchSuggessionStart = () => ({type: 'FETCH_SUGGESSIONS_START'});
const fetchSuggessionSuccess = data => ({type: 'FETCH_SUGGESSIONS_SUCCESS', payload: data});
const fetchSuggessionFailure = error => ({
  type: 'FETCH_SUGGESSIONS_FAILURE',
  payload: error,
});
const resetSuggessionsSuccess = () => ({type: 'RESET_SUGGESSIONS'});
