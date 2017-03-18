module.exports = `
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const {{name}} = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

{{name}}.defaultProps = {
  text: 'Hello.',
};

{{name}}.propTypes = {
  text: PropTypes.string,
};

export default {{name}};

`;
