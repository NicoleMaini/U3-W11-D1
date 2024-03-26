import { GET_COMPANIES } from "../actions";

// abbiamo creato lo stato che andrà a contenere il risultato della nostra fetch

const inState = {
  list: [],
};

const companiesReduces = (state = inState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default companiesReduces;
