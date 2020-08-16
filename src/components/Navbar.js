import React, { useEffect, useState, useCallback } from 'react';
import Links from './Links';
import Image from "gatsby-image";
import Helmet from "react-helmet";
import { StyledNavbar, StyledBurgerContainer } from "./styledComponents/StyledNavbar";

const Navbar = ({logo}) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [noAnim, setNoAnim] = useState(true);
  const menu = React.createRef();

  const onNavClick = () => {
    closeMenu();
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("click", handleClickOutside);
    }
  }, [menuOpen]);

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
    <StyledNavbar>
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