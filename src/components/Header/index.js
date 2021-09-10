import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="www">
        <FaHome size={24} />
      </a>
      <a href="www">
        <FaSignInAlt size={24} />
      </a>
      <a href="www">
        <FaUserAlt size={24} />
      </a>
    </Nav>
  );
}
