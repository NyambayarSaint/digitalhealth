import React from 'react';
import styled from 'styled-components';
import minimize from './miscs/minimize';
import ScrollAnimation from 'react-animate-on-scroll';

const Fourside = ({ data }) => {
    return (
        <Container>
            <div className="box">
                <h1><ScrollAnimation key={Math.random()} animateIn='fadeInLeft'>Approach</ScrollAnimation></h1>
                <div className="info"><ScrollAnimation key={Math.random()} animateIn='fadeInDown'>Making healthcare technologies accessible to everyone, now and for future generations by:</ScrollAnimation></div>
                <ScrollAnimation key={Math.random()} animateIn='fadeInUp'>
                    <div className="list">
                        <li>1. Making health care easier to access and allowing everyone to take better control of their own health.</li>
                        <li>2. Enabling health providers to use smart tools to monitor patient data, resulting in delivering the best possible service.</li>
                        <li>3. Providing health care workers with high technology products to work effectively and connect remotely with patients.</li>
                    </div>
                </ScrollAnimation>

            </div>
            <div className="right">
                <ScrollAnimation key={Math.random()} animateIn='fadeInRight'><img src={minimize(data.Image)} /></ScrollAnimation>
            </div>
        </Container>
    );
};

export default Fourside;

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    background:white;
    padding-left:30px;
    position:relative;
    border-bottom:1px solid rgba(0,0,0,0.1);
    .box{
        display:flex;
        flex-direction:column;
        justify-content:center;
        h1{
            font-weight:bold;
            opacity:0.3;
            font-size:50px;
            ${'' /* position:absolute; */}
            top:30px;
            margin-bottom:20px;
        }
        .info{
            font-size:20px;
            font-weight:bold;
            line-height:20px;
        }
        .list{
            margin-top:30px;
            li{
                list-style-type:none;
                opacity:0.8;
                margin-bottom:15px;
                &:last-child{
                    margin-bottom:0px;
                }
            }
        }
    }
    .right{
        width:50%;
    }
    @media only screen and (max-width: 768px){
        padding:0px;
        flex-direction:column-reverse;
        .box{
            padding:0px 15px 30px;
            h1{
                font-size:40px;
            }
        }
        .right{
            width:100%;
            margin-bottom:15px;
        }
    }
`