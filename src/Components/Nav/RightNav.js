import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-right: 8px;
  color: #fff;

  li {
    padding: 18px 10px;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #3d3d3d;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 155px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    li {
      color: #fff;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  font-size: 25px;
  padding: 15px 0 5px 15px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/mission'>Mission</StyledLink>
      <StyledLink to='/locate'>Locate</StyledLink>
      <StyledLink to='/contact'>Contact</StyledLink>
    </Ul>
  );
};

export default RightNav;
