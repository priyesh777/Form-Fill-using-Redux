import { formConstant } from "../actions/form";

const initialState = {
  people: [],
  individual_detail: [],
  formData: {
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    age: "",
    proficiency: ""
  }
};

const reducer = (state = initialState, action) => {
  // let { type, payload } = action;
  switch (action.type) {
    // case 'GET_PROVIENCE_TYPE':
    //   return {
    //     ...state,
    //     provience_type: payload,
    //   };

    // case 'GET_PEOPLE_DETAILS':
    //   return {
    //     ...state,
    //     people: payload,
    //   };

    case formConstant.SET_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.key]: action.payload.value
        }
      };
    case formConstant.GET_PEOPLE_DETAILS_SUCCESS:
      return {
        ...state,
        people: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
