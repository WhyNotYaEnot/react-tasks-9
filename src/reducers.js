import { combineReducers } from 'redux';
import * as actionTypes from './actions';

const imageReducer = (state = '/monke.gif', action) => {
  switch (action.type) {
    case actionTypes.setLogoImage:
      return action.payload;
    default:
      return state;
  }
};

const menuReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.setMenu:
      return action.payload;
    default:
      return state;
  }
};

const dateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.updateDate:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  logoImagePath: imageReducer,
  menuList: menuReducer,
  currentDate: dateReducer,
});

export default rootReducer;
