// import Axios from 'axios';

// export const postForm = (body) => (dispatch) => {
//   let individual_detail = {
//     first_name: body.FirstName,
//     last_name: body.LastName,
//     email: body.Email,
//     age: body.Age,
//     address: body.Address,
//     proficiency: body.Proficiency,
//   };

//   //implementation of redux-thunk
//   Axios.post('/peopleDetails', individual_detail)
//     .then((data) => {
//       console.log(data);
//       alert('successful');
//     })
//     .catch((err) => {
//       alert('something went wrong');
//     });
//   // dispatch({type: 'POST_FORM', payload: body})
// };

// export const getPeopleDetails = () => (dispatch) => {
//   Axios.get('/peopleDetails').then((data) => {
//     dispatch({ type: 'GET_PEOPLE_DETAILS', payload: data.data });
//   });
// };

export const formConstant = {
  GET_PEOPLE_DETAILS_REQUEST: "GET_PEOPLE_DETAILS_REQUEST",
  GET_PEOPLE_DETAILS_SUCCESS: "GET_PEOPLE_DETAILS_SUCCESS",
  GET_PEOPLE_DETAILS_FAILURE: "GET_PEOPLE_DETAILS_FAILURE",

  POST_PEOPLE_DETAILS_REQUEST: "POST_PEOPLE_DETAILS_REQUEST",
  POST_PEOPLE_DETAILS_SUCCESS: "POST_PEOPLE_DETAILS_SUCCESS",
  POST_PEOPLE_DETAILS_FAILURE: "POST_PEOPLE_DETAILS_FAILURE",

  SET_FORM_DATA: "SET_FORM_DATA"
};

//Send Form data through setFormData
export const setFormData = payload => {
  return {
    type: formConstant.SET_FORM_DATA,
    payload
  };
};

// Get data from Mock-api
export const getPeopleDetailsRequest = payload => {
  return {
    type: formConstant.GET_PEOPLE_DETAILS_REQUEST,
    payload
  };
};

export const getPeopleDetailsSuccess = payload => {
  return {
    type: formConstant.GET_PEOPLE_DETAILS_SUCCESS,
    payload
  };
};

export const getPeopleDetailsFailure = payload => {
  return {
    type: formConstant.GET_PEOPLE_DETAILS_FAILURE,
    payload
  };
};

//POSTING DATA
export const postPeopleDetailsRequest = payload => {
  return {
    type: formConstant.POST_PEOPLE_DETAILS_REQUEST,
    payload
  };
};

export const postPeopleDetailsSuccess = payload => {
  return {
    type: formConstant.POST_PEOPLE_DETAILS_SUCCESS,
    payload
  };
};

export const postPeopleDetailsFailure = payload => {
  return {
    type: formConstant.POST_PEOPLE_DETAILS_FAILURE,
    payload
  };
};
