module.exports = `
import React, { Component, Proptypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { myAction } from '../actions';

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

const mapStateToProps = (state) => {
    return { text: state.text };
};

export default connect(mapStateToProps, { myAction })({{name}});

`;
