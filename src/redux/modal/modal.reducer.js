const { OPEN_MODAL, CLOSE_MODAL } = require('./modal.type');

const initialState = {
  showing: false,
  component: undefined,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showing: true,
        component: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showing: false,
        component: undefined,
      };
    default:
      return state;
  }
};

export default modalReducer;
