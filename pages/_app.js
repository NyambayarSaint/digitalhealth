import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import checkLanguage from "@/miscs/checkLanguage";
import { MenuProvider } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import TagManager from "react-gtm-module";
import '../core/animatescroll.css'

class MyApp extends App {
    state = {
        menu: {},
        config: {},
        completelyLoaded: false,
        name: 'Digital Health',
        description: 'We will bring the future of healthcare.',
        serverUrl:'https://digitalmongolia.herokuapp.com',
        frontUrl: 'https://digital-healthcare.mn'
    };

    
    async componentDidMount() {
        const res = await checkLanguage(queryString, null);
        const config = {width: window.innerWidth, height: window.innerHeight};
        this.setState({ completelyLoaded: true, menu: res.data.menu, config });

        // GOOGLE TAG MANAGER
        // const tagManagerArgs = { gtmId: "GTM-5GWNX89" };
        // TagManager.initialize(tagManagerArgs);
    }

    render() {
        const { Component, pageProps, router } = this.props;
            return (
                <ThemeProvider theme={theme}>
                    <MenuProvider value={this.state}>
                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} key={router.route} />
                        </AnimatePresence>
                    </MenuProvider>
                </ThemeProvider>
            );
    }
}

export default MyApp;

const queryString = `
{
  menu {
    Menu {
      Name Target
    }
    Footer
    Linkedin
    Twitter
    Facebook
  }
}
`;