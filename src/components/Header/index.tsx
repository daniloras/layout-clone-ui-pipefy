import React from 'react';

import logo from '../../assets/img/logo.svg';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <img
        alt="Painel"
        className="navbar-brand-img"
        src={logo}
        height="50"
      />
    </Container>
  );
};

export default Layout;
