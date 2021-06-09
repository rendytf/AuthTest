import React from 'react'
import { Button, Container, Content, Text } from 'native-base'

const Home = () => {
    return(
        <Container>
            <Content>
                <Text>Home</Text>
                <Button rounded danger>
                    <Text>Logout</Text>
                </Button>
            </Content>
        </Container>
    )
}

export default Home