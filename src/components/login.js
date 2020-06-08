import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import {onInputText, onUserEnter, userEnterCheck} from '../redux/actions';

class Login extends Component {
  componentDidMount() {
    this.props.userEnterCheck();
  }

  componentDidUpdate() {
    if (this.props.user.username) {
      this.props.navigation.dispatch(StackActions.replace('Tab'));
    }
  }

  onBtnEnterPress = () => {
    this.props.onUserEnter(this.props.login);
  };

  render() {
    if (this.props.user.authChecked && !this.props.user.username) {
      return (
        <View style={styles.containerStyle}>
          <Icon type="material" size={100} name="android" color="#4EB60A" />A
          <View style={styles.inputContainerStyle}>
            <Input
              placeholder="Username"
              leftIcon={<Icon name="user" size={24} type="feather" />}
              onChangeText={(val) => this.props.onInputText('username', val)}
            />
          </View>
          <Button
            title="Enter"
            containerStyle={{width: '105%', marginBottom: 10}}
            buttonStyle={{backgroundColor: '#4EB60A', color: 'white'}}
            onPress={this.onBtnEnterPress}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  inputContainerStyle: {
    marginTop: 70,
    marginBottom: 70,
    width: '100%',
  },
});

const mapStateToProps = ({user, login}) => {
  return {user, login};
};

export default connect(mapStateToProps, {
  onInputText,
  onUserEnter,
  userEnterCheck,
})(Login);
