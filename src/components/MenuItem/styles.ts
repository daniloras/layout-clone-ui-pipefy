import styled from 'styled-components';

export const ContainerIcon = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  svg {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    background: var(--grey-1);
    fill: var(--purple-4);
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      background: var(--grey-1);
      fill: var(--purple-2);
    }
  }
`;
