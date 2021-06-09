import React, { useState } from 'react'
import { Container, View, Header, Content, Form, Item, Input, Label, Button, Text, H1, Right, Title, Left, Body, H3 } from 'native-base'
import Axios from 'axios'


const Login = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onBtnLogin = () => {
        Axios.post('https://staging-service.mydigilearn.id/v2/auth/login', {email : email, password : password,program_id : 1})
        .then((result) => {
            
        }).catch((err) => {
            
        });
    }

    return(
            <View>
                <View>
                    <H3>Login</H3>
                    <Text style={{fontSize : 12}}>please use your Telkom SSO account to login in DigiLearn</Text>
                </View>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input value={email} onChangeText={(text) => setEmail(text)} />
                    </Item>

                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input value={password} onChangeText={(text) => setPassword(text)} />
                    </Item>

                </Form>

                <Button block>
                    <Text>Login</Text>
                </Button>

                <Text onPress={() => navigation.navigate('register')}>Don't have account ? register here</Text>
            </View>
    )
}

export default Login