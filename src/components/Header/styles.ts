import styled from 'styled-components';

export const Container = styled.div`
  background: var(--purple-2);
  display: flex; 
  justify-content: start;
  flex-direction: row;
  width: 100%;
  height: 54px;
  -webkit-box-shadow: 0 4px 6px -6px var(--purple-2);
  -moz-box-shadow: 0 4px 6px -6px var(--purple-2);
  box-shadow: 0 4px 6px -6px var(--purple-2);
  img {
    padding: 14px 15px;
  }
`;