import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1>Which Block Cipher is the right fit for you?</h1>
            <h4>A questionnare to help decide on the right block cipher for your needs and purposes.</h4>
            <Button onClick={startQuiz} css={btnCSS}>Begin</Button>
        </Intro>
    )
}

export default Start
