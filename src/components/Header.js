import React from 'react'
import { Header, Right, Left, Body, Title } from 'native-base'

const MyHeader = ({props}) => {
    return(
        <Header>
            <Right>
                {props.right}
            </Right>
            <Body>
                {props.center}
            </Body>
            <Left>
                {props.left}
            </Left>
        </Header>
    )
}

export default MyHeader