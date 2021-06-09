import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Body, Button, Container, Content, Footer, Header, Title, Right, Left } from 'native-base'
import AuthRouter from './src/screens/Router/AuthRouter';

const App = () => {

  return (
    <Container>
      <NavigationContainer>
        <AuthRouter />
      </NavigationContainer>
    </Container>


    // <ScrollView>
    //   <Image style={dl.finalDraftImg} resizeMethod="auto" source={require('./src/supports/images/FinalDraft.gif')} />

    //   <View style={{flexDirection : "row", justifyContent : "space-around", marginBottom : 28}}>
    //     <TouchableOpacity style={[dl.touchAble, {borderBottomWidth : 2, borderBottomColor : "#F01515"}]}>
    //       <Text style={{color : "#F01515"}}>Login</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity style={dl.touchAble}>
    //       <Text>Sign Up</Text>
    //     </TouchableOpacity>
    //   </View>
      
    //   <View style={{paddingHorizontal : 20}}>
    //     <View style={{marginBottom : 16}}>
    //       <Text style={{fontSize : 18, marginBottom : 4}}>Login</Text>
    //       <Text style={{fontSize : 10}}>please use your Telkom SSO account to login in DigiLearn</Text>
    //     </View>

    //     <View style={{marginBottom : 16}}>
    //       <TextInput style={[dl.formControl, {marginBottom : 16}]} placeholder='NIK' placeholderTextColor="#495057" />
    //       <TextInput style={dl.formControl} placeholder='Password' placeholderTextColor="#495057" />
    //     </View>

    //     <View style={{flexDirection : "row", justifyContent : "space-between", marginBottom : 28}}>
    //       <Text>Remember me</Text>
    //       <Text>Forgot Password ?</Text>
    //     </View>
        
    //     <TouchableOpacity style={[dl.submitTouchAble, {backgroundColor : "#f01515", marginBottom : 20}]}>
    //       <Text style={{color : "white"}}>Login With Telkom SSO Account</Text>
    //     </TouchableOpacity>
    //   </View>

    // </ScrollView>
    
    // <LandingPage />
  )
}

const dl = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  finalDraftImg : {
    resizeMode : "cover",
    width : "100%"
  },
  touchAble : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    padding : 20
  },
  formControl : {
    paddingHorizontal : 12,
    paddingVertical : 6,
    borderWidth : 1,
    borderColor : "#ced4da",
    borderRadius : 4
  },
  mb16 : {
    marginBottom : 16
  },
  submitTouchAble : {
    width : "100%",
    justifyContent : "center",
    alignItems : "center",
    paddingHorizontal : 16,
    paddingVertical : 10,
    borderRadius : 4.8
  }
});

export default App;
