import React, { useState } from 'react'
// import Axios from 'axios'
// import { URL_API } from '../../supports/constants/urlApi'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, H1, Right, Title, Left, Body } from 'native-base'

const Register = ({navigation}) => {
    const [fullname,setFullname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    // const onBtnSignup = () => {
    //     try {
    //         if(!fullname || !email || !password) throw new Error("Form must be filled")
    //         Axios.post(URL_API + '/auth/register', {fullname,email,password})
    //         .then((res) => {
    //             console.log(res)
    //         }).catch((err) => {
    //             console.log(err)
    //         });
    //     } catch (error) {
            
    //     }
    // }
    
    return(
        <Container>
            <Content>
                <H1>Register here</H1>
                <Form>
                    <Item floatingLabel>
                        <Label>Fullname</Label>
                        <Input value={fullname} onChangeText={(text) => setFullname(text)} />
                    </Item>

                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input value={email} onChangeText={(text) => setEmail(text)} />
                    </Item>

                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input value={password} onChangeText={(text) => setPassword(text)} />
                    </Item>

                </Form>

                <Button block>
                    <Text>Sign Up</Text>
                </Button>

                <Text onPress={() => navigation.navigate('login')}>have a account ? login here</Text>
            </Content>
      </Container>
    )
}

export default Register