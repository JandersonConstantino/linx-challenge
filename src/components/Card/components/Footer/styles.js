import styled from 'styled-components';
import { primary, grey } from 'core/colors';

export const Container = styled.div`
  padding: 20px;
  display: block;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
`;

export const Property = styled(Label)`
  color: ${primary};
`;

export const Description = styled(Label)`
  color: ${grey};
`;
