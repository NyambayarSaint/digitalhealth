import React from 'react';
import styled from 'styled-components';
import minimize from './miscs/minimize';

const Image = ({data}) => {

    return (
        <Container>
            <div className="image" style={{backgroundImage: `url(${minimize(data.Image)})`}}></div>
        </Container>
    );
};

export default Image;

const Container = styled.div `
    .image{
        width:100%;
        height: 700px;
        background-size: cover;
        background-repeat:no-repeat;
        background-attachment: fixed;
        background-position: center;
    }
    @media only screen and (max-width: 768px){
        .image{
            height:200px;
            background-size: contain;
            background-attachment: unset;
        }
    }
`