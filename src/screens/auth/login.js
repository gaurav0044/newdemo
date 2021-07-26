import React, {PureComponent} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {orange, white} from '../../assets/colors';
import {size} from '../../assets/size';
import {  login} from "../../services/Redux/actions/";
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
      console.log(this.props.loggedIn);
  }
  UNSAFE_componentWillReceiveProps(nextProps){
      console.log(nextProps);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.padder}>
          <TextInput style={styles.inputBox} placeholder={'Email'} />
          <TextInput
            style={[
              styles.inputBox,
              {
                marginTop: size(20),
              },
            ]}
            placeholder={'Password'}
          />
          <Pressable style={styles.goButton} onPress={()=>this.props.login()}>
            <Text style={styles.goButtonText}>GO</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  padder: {
    flex: 1,
    padding: size(22),
  },
  inputBox: {
    borderBottomWidth: 1,
    fontSize: size(20),
    padding: size(10),
  },
  goButton: {
    width: '80%',
    paddingVertical: size(6),
    backgroundColor: orange,
    marginTop: size(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: size(3),
  },
  goButtonText: {
    fontSize: size(20),
    fontFamily: 'system',
    color: white,
    fontWeight: 'bold',
  },
});
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
      loggedIn: state.Login,      
    };
  };
  
  
  
  export default connect(mapStateToProps, {login})(Login);

