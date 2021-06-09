import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login/Login'
import Register from '../screens/Register/Register'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Container, Content } from 'native-base'

const Tab = createMaterialTopTabNavigator()
const AuthRouter = () => {
    return(
        <Container>
            <Content>
                <Image style={{resizeMode : "cover", width : "100%"}} source={require('../../src/supports/images/FinalDraft.gif')} />
                <Tab.Navigator headerMode="none">
                    {/* <Stack.Screen name="auth" component={Auth} /> */}
                    <Tab.Screen name="login" component={Login} />
                    <Tab.Screen name="register" component={Register} />
                </Tab.Navigator>
            </Content>
        </Container>
    )
}

export default AuthRouter