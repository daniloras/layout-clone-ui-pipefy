import React from 'react';

import SideBar from '../SideBar';
import Header from '../Header';
import Footer from '../Footer';

import { Container, Wrapper, Content } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Wrapper>
        <Header />
        <Content>
          <h1>Dashboard</h1>
        </Content>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
