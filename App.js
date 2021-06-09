import React, { useState } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import AuthRouter from './src/routers/AuthRouters'
import Home from './src/screens/Home/Home'

const App = () => {
    const [user,setUser] = useState(null)

    return(
        <Container>
            <NavigationContainer>
                {
                    user === null ?
                    <AuthRouter />
                    :
                    <Home />
                }
            </NavigationContainer>
        </Container>
    )
}

export default App