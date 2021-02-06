import React from 'react';
import styled from 'styled-components';
import TextTransition, { presets } from "react-text-transition";

const texts = [' your', 'your ', 'your  '];

const Slogan = ({ data }) => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setInterval(() => setIndex(index => index + 1), 1500)
    }, [])

    return (
        <Container>
            <h1><div className="side">The future of healthcare is in&nbsp;</div>
                <TextTransition
                    text={texts[index % texts.length]}
                    springConfig={presets.gentle}
                    style={{ margin: "0 4px" }}
                />
                <div className="side">&nbsp;hands.</div>
            </h1>
        </Container>
    );
};

export default Slogan;

const Container = styled.div`
    background:white;
    padding-top:150px;
    padding-bottom:150px;
    border-bottom:1px solid rgba(0,0,0,0.05);
    h1{
        justify-content:center;
        display:flex;
        text-align:center;
        font-weight:bold;
    }
    @media only screen and (max-width: 768px){
        padding:30px 15px;
        h1{
            font-size: 20px;
            flex-direction:column;
            .text-transition{
                margin:auto !important;
            }
        }
    }
`