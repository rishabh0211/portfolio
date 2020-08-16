import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from '../styles/globalStyles';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from './Head';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, logo }) => {
  const { site } = useStaticQuery(query);
  return (
    <div>
      <Head metadata={site.siteMetadata} />
      <GlobalStyle />
      <Navbar logo={logo[0]} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;

const query = graphql`
  {
    site {
      siteMetadata {
        description
        siteUrl
        title
        siteLanguage
      }
    }
  }
`;