import React from 'react';
import styled from 'styled-components';
import minimize from './miscs/minimize';
import {FaGlobeAsia, FaMapMarkerAlt, FaPhone, FaEnvelope} from 'react-icons/fa'

const Contact = ({data}) => {
    
    return (
        <Container style={{backgroundImage: data.Background && `url(${minimize(data.Background)})`}}>
            <div className="box">
                <h1>{data.Title}</h1>
                <div className="info">
                    <div className="entry"><FaGlobeAsia/> {data.Location}</div>
                    <div className="entry"><FaMapMarkerAlt/> {data.Address}</div>
                    <div className="entry"><FaPhone/> {data.Phone}</div>
                    <div className="entry"><FaEnvelope/> {data.Email}</div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;

const Container = styled.div `
    width:100%;
    height:100vh;
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
        }
        .info{
            padding:50px;
            border:1px solid rgba(0,0,0,0.1);
            background:rgba(255,255,255,0.5);
            .entry{
                margin-bottom:15px;
                text-align:center;
                svg{
                    margin-right:5px;
                    font-size: 20px;
                    opacity:0.7;
                }
            }
        }
    }
`