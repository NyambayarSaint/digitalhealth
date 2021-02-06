import React from 'react';
import styled from 'styled-components';
import minimize from './miscs/minimize';

const Image = ({data}) => {

    const img = React.useRef();
    const [height, setHeight] = React.useState(0);
    console.log(height,'yey')
    React.useEffect(()=>{
        setTimeout(() => {
            setHeight(img.current.offsetHeight);
        }, 1000);
    },[]);

    return (
        <Container height={height}>
            <img ref={img} src={minimize(data.Image)}/>
            <div className="image" style={{backgroundImage: `url(${minimize(data.Image)})`}}></div>
        </Container>
    );
};

export default Image;

const Container = styled.div `
    ${({height}) => height && `
    img{
        display:none;
    }
    `};
    .image{
        width:100%;
        height: ${({height}) => height && height + 'px'};
        background-size: cover;
        background-repeat:no-repeat;
        background-attachment: fixed;
        background-position: center;
    }
    @media only screen and (max-width: 768px){
        height:auto !important;
        img{
            display:block;
        }
        .image{
            display:none;
        }
    }
`