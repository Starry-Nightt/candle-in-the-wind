const { OPEN_SIDEBAR, CLOSE_SIDEBAR } = require('./sidebar.type');

const initialState = {
  showing: false,
  component: undefined,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        showing: true,
        component: action.payload,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        showing: false,
        component: undefined,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
