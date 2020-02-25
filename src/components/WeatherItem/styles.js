import styled from 'styled-components';
import { lightPurple, secondary, primaryDark } from 'core/colors';

export const Container = styled.div`
  border: 1px solid ${lightPurple};
  border-radius: 14px;
  display: block;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    transition-duration: 0.1s;
    transform: scale(1.1);
    transform-origin: center bottom;
    background-color: ${primaryDark};
    border-color: ${primaryDark};
  }
`;

export const Block = styled.div`
  display: block;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LabelWeekday = styled.label`
  color: ${lightPurple};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export const LabelClouds = styled.label`
  font-weight: bold;
  color: ${lightPurple};
  display: inline-block;
  font-size: 12px;
  margin-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const LabelWind = styled(LabelClouds)`
  margin-bottom: 0px;
`;

export const LabelTemperature = styled.label`
  color: ${secondary};
  font-size: 14px;
  display: inline-block;
  margin-top: 60px;
  margin-bottom: 10px;
  margin-left: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const ImageIcon = styled.img`
  width: 30px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`;
