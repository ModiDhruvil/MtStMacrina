// COMOPONENT OR LIBRARY IMPORT
import React, {Fragment} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';

//import third-party packages
import {ActionCreators} from '@actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {initialWindowSafeAreaInsets} from 'react-native-safe-area-context';

// import components
import {LoadingIndicator, AlertModel, ToastAlert} from '@components';

// import themes
import {COLORS, IMAGES, COMMON_STYLE} from '@themes';

// import helpers
import {Responsive} from '@helpers';

//import languages
import {localize} from '@languages';

class Wrapper extends React.PureComponent {
 
  render() {

    const {  children } = this.props;
    return (
      
                   <ImageBackground source={IMAGES.background} style={[styles.background ]}>
          
          
                     {children}
          
                     </ImageBackground>
     
    );
  }
}

const styles = StyleSheet.create({
 
  background:{
    flex:1,
    backgroundColor:COLORS.TRANSPARENT
  },
 
 
});

function mapStateToProps(state, props) {
  return {
    isOnline: state.redState.isOnline,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

//Connect Everything
export const ImgBackground = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);