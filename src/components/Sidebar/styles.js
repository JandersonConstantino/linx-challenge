import styled from 'styled-components';
import { primary } from 'core/colors';

export const Toolbar = styled.div`
  background-color: ${primary};
  height: 95vh;
  width: 80px;
  float: left;
  border-radius: 20px;
  display: grid;
  
  div {
    margin: auto;
    
    :first-child { margin-top: 25px; }

    :last-child { margin-bottom: 25px; }
  }
`;

export const Image = styled.img`
  :hover {
    cursor: pointer;
  }
`;
