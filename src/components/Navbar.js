import React, { useEffect, useState, useCallback } from 'react';
import Links from './Links';
import Image from "gatsby-image";
import Helmet from "react-helmet";
import { StyledNavbar, StyledBurgerContainer } from "./styledComponents/StyledNavbar";
import { throttle } from '../utils';

const Navbar = ({logo}) => {
  const THRESHOLD = 150;
  const [menuOpen, setMenuOpen] = useState(false);
  const [noAnim, setNoAnim] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const menu = React.createRef();

  const onNavClick = () => {
    closeMenu();
  };

  useEffect(() => {
    setScroll();
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 200));
    if (menuOpen) {
      window.addEventListener("click", handleClickOutside);
    }
  }, [menuOpen]);

  const handleScroll = () => {
    setScroll();
  };

  const setScroll = () => {
    if (window.pageYOffset > THRESHOLD) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClickOutside = useCallback(e => {
    if (menu && menu.current && !menu.current.contains(e.target)) {
      closeMenu();
    }
  }, [menu]);

  const closeMenu = () => {
    window.removeEventListener("click", handleClickOutside);
    setMenuOpen(false);
  };

  const handleBurgerClick = () => {
    setNoAnim(false);
    if (menuOpen) {
      return closeMenu();
    }
    setMenuOpen(true);
  };

  return (
    <StyledNavbar scrolled={scrolled}>
      <Helmet>
        <body className={menuOpen ? 'hideOverflow' : ''} />
      </Helmet>
      <div className="logo">
        <Image fluid={logo.fluid} alt="logo" />
      </div>
      <Links styleClass="desktop-links" />
      <StyledBurgerContainer
        className={`burger-container ${menuOpen ? 'active' : ''} ${noAnim ? 'no-anim' : ''}`}
        onClick={handleBurgerClick}
      >
        <div className="line-1" ></div>
        <div className="line-2" ></div>
        <div className="line-3" ></div>
      </StyledBurgerContainer>
      <aside className={`mobile-links-container ${menuOpen && 'active'}`}>
        <Links ref={menu} styleClass='mobile-links' handleClick={onNavClick} />
      </aside>
    </StyledNavbar>
  )
}

export default Navbar;