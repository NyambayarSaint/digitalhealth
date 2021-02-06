import React from 'react';
import styled from 'styled-components';
import minimize from './miscs/minimize';
import { FaGlobeAsia, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'

const Contact = ({ data }) => {

    return (
        <Container style={{ backgroundImage: data.Background && `url(${minimize(data.Background)})` }}>
            <div className="box">
                <ScrollAnimation key={Math.random()} animateIn='fadeInDown'>
                    <h1>{data.Title}</h1>
                </ScrollAnimation>
                <ScrollAnimation key={Math.random()} animateIn='fadeInUp'>
                    <div className="info">
                        <div className="entry"><FaGlobeAsia /> {data.Location}</div>
                        <div className="entry"><FaMapMarkerAlt /> {data.Address}</div>
                        <div className="entry"><FaPhone /> {data.Phone}</div>
                        <div className="entry"><FaEnvelope /> {data.Email}</div>
                    </div>
                </ScrollAnimation>
            </div>
        </Container>
    );
};

export default Contact;

const Container = styled.div`
    width:100%;
    padding:150px 0px;
    background-size: cover;
    background-position:center center;
    display:flex;
    justify-content:center;
    align-items:center;
    .box{
        background-image: url('/img/bg-map.png');
        background-size: contain;
        background-position:center 50px;
        background-repeat:no-repeat;
        h1{
            font-weight:bold;
            margin-bottom:50px;
            text-align:center;
            font-size:50px;
        }
        .info{
            padding:50px;
            border:1px solid rgba(0,0,0,0.1);
            background:rgba(255,255,255,0.5);
            .entry{
                margin-bottom:15px;
                text-align:center;
                &:last-child{margin-bottom:0px;}
                svg{
                    margin-right:5px;
                    font-size: 20px;
                    opacity:0.7;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        padding:50px 15px;
        .box{
            h1{
                margin-top:-15px;
                font-size: 40px;
                opacity:0.3;
            }
            .info{
                margin-top:-30px;
                padding:25px;
                .entry{
                    font-size: 16px;
                }
            }
        }
    }
`