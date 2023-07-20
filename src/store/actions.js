// src/store/actions.js
import axios from 'axios';

export const fetchPlaces = (input) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=AIzaSyBw2fUHJRJlWOYcujvixhn15CQrWgN5Df4`,
        // {
        //   params: {
        //     input,
        //     key: 'AIzaSyBw2fUHJRJlWOYcujvixhn15CQrWgN5Df4',
        //   },
        // }
      );

      dispatch({
        type: 'FETCH_PLACES_SUCCESS',
        payload: response.data.predictions,
      });
    } catch (error) {
      dispatch({ type: 'FETCH_PLACES_FAILURE', payload: error.message });
    }
  };
};
