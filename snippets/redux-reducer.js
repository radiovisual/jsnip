module.exports = `
import {
  CONSTANT_TYPE,
} from '../actions/types';

const INITIAL_STATE = {};

const {{name}} = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANT_TYPE:
      return { ...state };
    default:
      return state;
  }
};

export default {{name}};

`;
