  
import styled from 'styled-components';
   
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: var(--white);
  height: 100vh;
  margin-top: 0px;
  width: min(56px, 100%);
`;

export const Navigation = styled.div`
  padding: 4px 0;
  text-align: center;
`;

export const Divider = styled.div` 
  background: var(--purple-5);
  margin: 10px 0px;
  height: 1px;
  width: 100%;
`;