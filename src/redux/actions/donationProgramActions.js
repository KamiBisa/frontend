import {GLOBALTYPES} from './globalTypes';
import axios from 'axios';

export const DONATION_PROGRAM_TYPES = {
  CREATE_DONATION_PROGRAM: 'CREATE_DONATION_PROGRAM',
  GET_VERIFIED_DONATION_PROGRAM: 'GET_VERIFIED_DONATION_PROGRAM',
  LOADING_DONATION_PROGRAM: 'LOADING_DONATION_PROGRAM'
};

export const createDonationProgram = programData => async(dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: true
      }
    });

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const res = await axios.post('/api/donation_program/postCreateDonationProgram', programData, config);
    dispatch({
      type: DONATION_PROGRAM_TYPES.CREATE_DONATION_PROGRAM,
      payload: res.data.donation_program
    })

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: false
      }
    })
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.message
      }
    })
  }
}

export const getVerifiedDonationProgram = () => async(dispatch) => {
  try {
    dispatch({
      type: DONATION_PROGRAM_TYPES.LOADING_DONATION_PROGRAM,
      payload: {
        loading: true
      }
    })

    const res = await axios.get('/api/donation_program/getVerifiedDonationProgram');
    dispatch({
      type: DONATION_PROGRAM_TYPES.GET_VERIFIED_DONATION_PROGRAM,
      payload: res.data.donation_program
    });

    dispatch({
      type: DONATION_PROGRAM_TYPES.LOADING_DONATION_PROGRAM,
      payload: false
    })
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.message
      }
    })
  }
}