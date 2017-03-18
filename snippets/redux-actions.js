module.exports = `
import {
  CONSTANT_TYPE,
} from '../types';

const {{name}} = (value) => {
  return {
    type: CONSTANT_TYPE,
    payload: value,
  };
};

export default {{name}};
`;
