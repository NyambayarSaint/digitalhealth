import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll'

const ParallaxLeft = () => {
    return (
        <Container>
            <div className="text">
                <ScrollAnimation key={Math.random()} animateIn='fadeInUp'>
                    <span>We will bring the future of healthcare.</span>
                </ScrollAnimation>
            </div>
            <ScrollAnimation key={Math.random()} animateIn='fadeInDown'>
                <div className="caption">VISION</div>
            </ScrollAnimation>
        </Container>
    );
};

export default ParallaxLeft;

const Container = styled.div`
    background:white;
    padding:150px 10vw;
    .caption{
        font-size: 100px;
        font-weight:bold;
        opacity:0.3;
        line-height:75px;
    }
    .text{
        span{
            font-size: 50px;
            font-weight:bold;
        }
    }
`