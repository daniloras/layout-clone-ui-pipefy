import styled from 'styled-components';

export const Container = styled.div`
  background: var(--purple-5);
  display: flex; 
  justify-content: start;
  flex-direction: row;
  width: 100%; 
  p {
    color: var(--purple-4);
    padding: 10px;
    border-top: 1px solid var(--white);
    width: 100%;
    margin: 5px;
    font-size: 12px;
     a {
       color: var(--purple-3);
       text-decoration: none;
     }
  }
`;