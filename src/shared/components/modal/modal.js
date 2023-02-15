import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { hideLayer } from '~/redux/layer/layer.action';
import { closeModal } from '~/redux/modal/modal.action';
import style from './modal.module.scss';

function Modal(props) {
  const { component, closeModal } = props;
  return (
    <div className={`${style.modal}`}>
      <button className={`${style.closeButton}`} onClick={() => closeModal()}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      {component}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    component: state.modal.component,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
      dispatch(closeModal());
      dispatch(hideLayer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
