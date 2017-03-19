const handlebars = require('handlebars');
const actionSnip = require('./snippets/redux-actions');
const functionSnip = require('./snippets/react-function');
const classSnip = require('./snippets/react-class');
const loremSnip = require('./snippets/lorem');
const reducerSnip = require('./snippets/redux-reducer');
const reduxClass = require('./snippets/redux-class');

module.exports = (input, opts) => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  const options = opts || {};

  if (!options.name) {
    options.name = 'ClassName';
  }

  const snippets = {
    action: actionSnip,
    reducer: reducerSnip,
    function: functionSnip,
    class: classSnip,
    lorem: loremSnip,
    reduxclass: reduxClass,
  };

  if (!snippets[input]) {
    return Promise.resolve(`There is no snippet by the name ${input}`);
  }

  const template = handlebars.compile(snippets[input]);
  const result = template(options);

  return Promise.resolve(result);
};
