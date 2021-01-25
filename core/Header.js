import React, { useContext, useState } from 'react';
import { MenuContext } from '@/miscs/ContextMenuProvider'
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu'
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';

const Header = () => {
    const { menu } = useContext(MenuContext);
    console.log(menu, 'hehe');
    const [open, setOpen] = useState(false);
    const outside = useRef();
    const handleOutsideClick = (e) => e.target === outside.current && setOpen(false);
    return (
        <Container>
            <img className="logo" src="/img/logo.png" />

            <AnimatePresence>
                {open && <motion.div animate={{ opacity: 1}} initial={{ opacity: 0}} exit={{ opacity: 0}}>
                    <div className="popup" onClick={handleOutsideClick} ref={outside}>
                        <div className="menu-con">
                            <img src="/img/logo.png" />
                            {menu && menu.Menu.length && menu.Menu.map(el => (
                                <li key={Math.random()}>{el.Name}</li>
                            ))}
                            <HamburgerMenu menuClicked={() => setOpen(!open)}
                                className="burger2"
                                isOpen={open}
                                color='black'
                                width={35}
                                height={25}
                                strokeWidth={3}
                            />
                        </div>
                    </div>
                </motion.div>}
            </AnimatePresence>

            <HamburgerMenu menuClicked={() => setOpen(!open)}
                className="burger"
                isOpen={open}
                color='black'
                width={25}
                height={15}
            />

        </Container>
    );
};

export default Header;

const Container = styled.div`
    position:fixed;
    z-index:9;
    top:0px;
    left:0px;
    right:0px;
    padding:30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background:${({ theme }) => theme.mainColor};
    .logo{
        height:50px;
        &:hover{
            cursor:pointer;
        }
    }
    .burger{
        &:hover{
            cursor:pointer;
        }
    }
    .popup{
        position:absolute;
        z-index:10;
        background:rgba(0,0,0,0.6);
        left:0px;
        top:0px;
        width:100vw;
        height:100vh;
        img{
            height:100px;
            margin-bottom:50px;
        }
        .menu-con{
            background:${({ theme }) => theme.mainColor};
            padding:10vh 10vw;
            padding-right:calc(10vw + 100px);
            width:fit-content;
            height:100vh;
            position:relative;
            li{
                list-style-type:none;
                font-size:20px;
                font-weight:bold;
                text-transform:uppercase;
                margin-bottom:20px;
                overflow:hidden;
                &:last-child{
                    margin-bottom:0px;
                }
                &:after{
                    display:block;
                    content: "";
                    width:100%;
                    height:2px;
                    background:black;
                    margin-left:-100%;
                    transition:0.3s ease;
                }
                &:hover{
                    &:after{
                        margin-left:0px;
                    }
                    cursor:pointer;
                }
            }
            .burger2{
                position:absolute !important;
                right:calc(10vw - 100px) !important;
                top:calc(10vh + 40px) !important;
                &:hover{
                    cursor:pointer;
                }
            }
        }
    }
    @media only screen and (max-width: 768px){
        .popup{
            img{
                object-fit:contain;
                height:50px;
            }
            .menu-con{
                width:100%;
                padding:30px;
                .burger2{
                    right:25px !important;
                    top:43px !important;
                }
            }
        }
    }
`