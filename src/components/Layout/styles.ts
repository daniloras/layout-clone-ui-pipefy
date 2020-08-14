import styled from 'styled-components';

export const Container = styled.div`
  background: var(--purple-5);
  flex: 1;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 25px;
  h1 {
    color: #494949;
    font-size: 22px;
  }
`;
