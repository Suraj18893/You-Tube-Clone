import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("ytc-access-token")
    ? sessionStorage.getItem("ytc-access-token")
    : null,
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

       case LOG_OUT:
          return {
             ...prevState,
             accessToken: null,
             user: null,
          }
    default:
      return prevState;
  }
};

export const selectedVideoReducer = (
  state = {
     loading: true,
     video: null,
  },
  action
) => {
  const { payload, type } = action

  switch (type) {
     case SELECTED_VIDEO_REQUEST:
        return {
           ...state,
           loading: true,
        }
     case SELECTED_VIDEO_SUCCESS:
        return {
           ...state,
           video: payload,
           loading: false,
        }
     case SELECTED_VIDEO_FAIL:
        return {
           ...state,
           video: null,
           loading: false,
           error: payload,
        }

     default:
        return state
  }
}
