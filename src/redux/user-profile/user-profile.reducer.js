const {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  END_SESSION,
} = require('./user-profile.type');

const initialState = {
  loading: false,
  user: null,
  error: '',
  isLoggedIn: false,
  role: null,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        user: null,
        error: '',
      };
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
        isLoggedIn: true,
      };
    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case END_SESSION:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
