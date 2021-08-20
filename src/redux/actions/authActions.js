import {GLOBALTYPES} from './globalTypes';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const register = (userData) => async(dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: true
      }
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const res = await axios.post('/api/authentication/postRegister', userData, config);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        user: res.data.user,
        token: res.data.token
      }
    })

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.success
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

export const login = (userData) => async(dispatch) => {
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
    const res = await axios.post('/api/authentication/postLogin', userData, config);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        user: res.data.user,
        token: res.data.token
      }
    })
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.success
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

export const userInfo = () => async(dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: true
      }
    })
    const res = await axios.get('/api/authentication/getUserInfo');
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: res.data.userData
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
        error: err.stack
      }
    })
  }
}

export const logout = () => async(dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: true
      }
    })

    const res = await axios.get('/api/authentication/getLogout');
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {}
    })

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        message: res.data.message
      }
    })
    window.location.href='/login';
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.response.data.message
      }
    })
  }
}