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
            <div className="con">
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
            </div>
            <div className="mobile-text">
                <div className="text">We will&nbsp;</div>
                <TextTransition
                    text={texts[index % texts.length]}
                    springConfig={presets.gentle}
                    style={{ margin: "0 4px" }}
                />
            </div>
        </Container>
    );
};

export default Leftspecial;

const Container = styled.div`
    .con{
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
    }
    .mobile-text{
        display:none;
    }
    @media only screen and (max-width: 768px){
        max-height:375px;
        .con{
            .box{
                width:100%;
                justify-content:flex-end;
                h1{
                    margin:unset;
                    font-size:20px;
                    margin-left:-50px;
                    text-align:right;
                    padding-right:20px;
                    margin-bottom:15px;
                }
                .trans-text{
                    display:none;
                }
            }
        }
        
        .mobile-text{
            background-image: linear-gradient(to right,#ebf0f4, #dbdee3, #dbdee3);
            display:block;
            padding:0px 15px 15px;
            .text{
                font-size:16px;
                font-weight:bold;
                margin-left:5px;
                text-align:right;
            }
            .text-transition{
                font-size: 16px;
                text-align:right;
                font-weight:bold;
                height:48px;
            }
        }
    }
`