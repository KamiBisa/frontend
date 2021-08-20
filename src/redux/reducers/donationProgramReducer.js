import {DONATION_PROGRAM_TYPES} from './../actions/donationProgramActions';

const initialState = {
  loading: false,
  donationPrograms: []
};

const donationProgramReducer = (state = initialState, action) => {
  switch (action.type) {
    case DONATION_PROGRAM_TYPES.LOADING_DONATION_PROGRAM:
      return {
        ...state,
        loading: action.payload
      }
    case DONATION_PROGRAM_TYPES.CREATE_DONATION_PROGRAM:
      return {
        ...state,
        donationPrograms: [...state.donationPrograms, action.payload]
      };
    case DONATION_PROGRAM_TYPES.GET_VERIFIED_DONATION_PROGRAM:
      return {
        ...state,
        donationPrograms: action.payload
      }
    default:
      return state;
  }
}

export default donationProgramReducer;