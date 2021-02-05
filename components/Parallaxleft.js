import React from 'react';
import styled from 'styled-components';

const ParallaxLeft = () => {
    return (
        <Container>
            <div className="text">
                <span>We will bring the future of healthcare.</span>
            </div>
            <div className="caption">VISION</div>
        </Container>
    );
};

export default ParallaxLeft;

const Container = styled.div `
    background:white;
    padding:150px 10vw;
    .caption{
        font-size: 100px;
        font-weight:bold;
        opacity:0.3;
        line-height:150px;
    }
    .text{
        span{
            font-size: 50px;
        }
    }
`