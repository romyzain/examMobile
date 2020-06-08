import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.text}>`${this.props.user.username}`</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center'
  },
  text : {
      textAlign : 'center'
  }
});

const mapStateToProps = ({homeListPost, user}) => {
  return {
    homeListPost,
    user,
  };
};

export default connect(mapStateToProps)(Home);
