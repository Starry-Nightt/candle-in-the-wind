import Sidebar from '~/layout/sidebar/sidebar';
import { hideLayer, showLayer } from '../layer/layer.action';

const { OPEN_SIDEBAR, CLOSE_SIDEBAR } = require('./sidebar.type');

const openSidebar = (component) => {
  return {
    type: OPEN_SIDEBAR,
    payload: component,
  };
};

const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};

const showSidebar = (component) => {
  return (dispatch) => {
    dispatch(showLayer(<Sidebar />));
    dispatch(openSidebar(component));
  };
};

const unShowSidebar = () => {
  return (dispatch) => {
    dispatch(closeSidebar());
    dispatch(hideLayer());
  };
};

export { openSidebar, closeSidebar, showSidebar, unShowSidebar };
