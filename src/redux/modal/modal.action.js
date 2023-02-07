const { OPEN_MODAL, CLOSE_MODAL } = require('./modal.type');

const openModal = (component) => {
  return {
    type: OPEN_MODAL,
    payload: component,
  };
};

const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export { openModal, closeModal };
