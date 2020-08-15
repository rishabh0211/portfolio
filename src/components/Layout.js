import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import GlobalStyle from '../styles/globalStyles';
import Navbar from './Navbar';
import Footer from './Footer';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
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
          author
          description
          image
          siteUrl
          title
          twitterUsername
        }
      }
    }
  `;