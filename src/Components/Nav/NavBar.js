import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 3px 0 12px 12px;
    font-weight: 1200px;
    font-size: 20px;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <div className='logo'>Foodful</div>
      <Burger />
    </Nav>
  );
};

export default NavBar;
