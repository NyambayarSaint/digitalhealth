import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll'

const Caption = () => {
    return (
        <Container>
            <h1><ScrollAnimation key={Math.random()} animateIn='fadeInDown'>Who we are</ScrollAnimation></h1>
            <div className="box">
                <h2><ScrollAnimation key={Math.random()} animateIn='fadeInRight'>Medical entrepreneurs</ScrollAnimation></h2>
                <div className="border">
                    <ScrollAnimation key={Math.random()} animateIn='fadeInUp'><span>Center for Digital Health Care is a team of dynamic medical entrepreneurs with brilliant minds who aspires to bring disruptive medical innovations in the country and contribute to the nation’s healthcare development.</span></ScrollAnimation>
                </div>

            </div>
        </Container>
    );
};

export default Caption;

const Container = styled.div`
    background:white;
    padding:250px 10vw 150px;
    position:relative;
    h1{
        position:absolute;
        right:10vw;
        top:100px;
        font-weight:bold;
        font-size:100px;
        opacity:0.3;
    }
    .box{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:60px;
        h2{
            font-weight:bold;
        }
        .border{
            width:50%;
            padding:25px;
            border:1px solid black !important;
            color:black;
            font-size:18px;
        }
    }
`