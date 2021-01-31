import React from 'react';
import styled from 'styled-components';
import './NavBar.css';

const Nav = styled.nav`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;

  .logo {
    padding: 15px 0;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 10px;
    }
  }
`;

const NavBar = () => {
  return (
    <>
      {/* <Nav /> */}
      <div>
        <div className='logo'>Nav Bar</div>
        <ul>
          <li>Home</li>
          <li>Mission</li>
          <li>Locate</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
