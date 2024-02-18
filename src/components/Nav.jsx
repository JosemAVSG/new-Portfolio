import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <Logo>
        <h1>José González</h1>
      </Logo>
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" className="navi" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/proyectos"  className="navi" activeClassName="active">
          Proyectos
        </NavLink>
        <NavLink to="/contacto"  className="navi" activeClassName="active">
          Contacto
        </NavLink>
      </NavLinks>
      <BurgerButton onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </BurgerButton>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  padding: 10px;
  background-color: rgb(23, 64, 102);
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  h1 {
    color: #fff;
    margin-left:30px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 50px;
    left: ${(props) => (props.isOpen ? "0" : "-100%")};
    width: 100%;
    justify-content: center;
    height: calc(100vh - 50px);
    background-color: rgb(23, 64, 102);
    transition: left 0.3s ease-in-out;
  }

  .navi{
  text-decoration: none;
  margin-left:10px;
  margin-right:10px;
  position: relative;
  color:#fff;
  padding: 0 10px;
 font-size: 20px;
}
  .navi:after {
  content: "";
  position:absolute;
  background-color:#dbdce6;
  height:3px;
  width:0;
  left:0;
  bottom:-10px;
  transition:all .5s ease-in-out;
  }
.navi:hover:after{
  width:100%;
  
}
.active{
  color:#ffffff;

}
  a {
    text-decoration: none;
    color: #fff;
    margin: 0 15px;
    font-size: 18px;

    &:hover {
      color: #63b1f7;
    }

    @media screen and (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

const BurgerButton = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    width: 30px;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 4px 0;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
      background-color: #fff;
    }
  }

  .open {
    transform: rotate(45deg) translate(-5px, 6px);

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translate(-5px, -6px);
    }
  }
`;

export default Navigation;
