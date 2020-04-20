const initialState= {
    people: [],
    individual_detail : [],
}

const reducer = (state=initialState, action) => {
    let {type, payload} = action;

    switch (type) {
    
        case 'GET_PROVIENCE_TYPE':
            return{
                ...state,
                provience_type: payload
            }
        case 'GET_PEOPLE_DETAILS':
            return {
                ...state,
                people: payload
            }
     
        default:
            return state;

    }
}

export default reducer;