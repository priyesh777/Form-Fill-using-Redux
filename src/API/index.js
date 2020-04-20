import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5e9c847e0fd0b50016f74689.mockapi.io',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// axios.defaults.baseURL = 'https://5e9c847e0fd0b50016f74689.mockapi.io';

//   Axios.get('/peopleDetails').then((data) => {
//     dispatch({ type: 'GET_PEOPLE_DETAILS', payload: data.data });

export const getPeopleDetails = (payload) => api.get('/peopleDetails', payload);
