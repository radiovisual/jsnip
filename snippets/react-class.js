module.exports = `
import React, { Component, Proptypes } from 'react';
import { View, Text } from 'react-native';

class {{name}} extends Component {
  componentWillMount() {
    // get to work.
  }

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

{{name}}.defaultProps = {
  text: 'Hello.',
};

{{name}}.propTypes = {
  text: Proptypes.string,
};

export default {{name}};

`;
