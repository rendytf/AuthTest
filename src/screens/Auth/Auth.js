import React from 'react'
import { Image } from 'react-native'
import { Container, Content, Text } from 'native-base'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const AuthPage = () => {
    return(
        <Container>
            <Content>
                <Image source={require('../../supports/images/FinalDraft.gif')} />
            </Content>
        </Container>
    )
}


export default AuthPage