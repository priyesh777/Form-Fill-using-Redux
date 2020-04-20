import Axios from "axios";

export const postForm = (body) => dispatch => {
    let individual_detail = {
        first_name: body.FirstName,
        last_name: body.LastName,
        email: body.Email,
        age: body.Age,
        address: body.Address,
        proficiency: body.Proficiency,
    }

    //implementation of redux-thunk
    Axios.post('/peopleDetails', individual_detail)
    .then(data=>{
        console.log(data);
        alert('successful')
    })
    .catch(err => {
        alert('something went wrong')
    })
    // dispatch({type: 'POST_FORM', payload: body})
}

export const getPeopleDetails = () => dispatch => {
    Axios.get('/peopleDetails')
    .then(data => {
        dispatch({type: 'GET_PEOPLE_DETAILS', payload: data.data})
    })
}

