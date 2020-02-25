import styled from 'styled-components';
import { secondary, lightPurple } from 'core/colors';

export const Div = styled.div`
  display: block;
`;

export const Date = styled.label`
  display: block;
  color: ${secondary};
  text-align: center;
`;

export const Hour = styled.label`
  display: block;
  margin-top: 8px;
  color: ${lightPurple};
  text-align: center;
`;