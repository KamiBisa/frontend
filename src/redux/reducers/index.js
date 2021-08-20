import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import donationProgramReducer from './donationProgramReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  donationProgram: donationProgramReducer
})