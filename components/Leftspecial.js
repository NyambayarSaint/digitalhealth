import React from 'react';
import styled from 'styled-components';
import minimize from './miscs/minimize';
import TextTransition, { presets } from "react-text-transition";
import ScrollAnimation from 'react-animate-on-scroll'

const texts = ['give the chance to live longer and healthier.',
    'make you receive care, diagnosis and treatment wherever you are.',
    'give the chance to live longer and healthier. ',
    'make you receive care, diagnosis and treatment wherever you are. '];

const Leftspecial = ({ data }) => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => setIndex(index => index + 1), 3000)
    }, [])

    return (
        <Container>
            <img src={minimize(data.Image)} />
            <div className="box">
                <h1>Personal health monitor</h1>
                <div className="trans-text">
                    <div className="text">We will&nbsp;</div>
                    <TextTransition
                        text={texts[index % texts.length]}
                        springConfig={presets.gentle}
                        style={{ margin: "0 4px" }}
                    />
                </div>

            </div>
        </Container >
    );
};

export default Leftspecial;

const Container = styled.div`
    background:#dbdee3;
    display:flex;
    position:relative;
    img{
        width:50%;
    }
    .box{
        display:flex;
        flex-direction:column;
        justify-content:center;
        h1{
            font-weight:bold;
            margin-bottom:50px;
            opacity:0.5;
            font-size:4vw;
            margin-left:-150px;
        }
        .trans-text{
            display:flex;
            font-weight:bold;
            font-size:2vw;
            margin-left:-150px;
            height:62px;
            .text{
                white-space:nowrap;
            }
        }
    }
`