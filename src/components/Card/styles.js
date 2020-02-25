import styled from 'styled-components';
import { secondary } from 'core/colors';

export const Container = styled.div`
  float: left;
  background-color: ${secondary};
  border-radius: 16px;
  min-height: 87vh;
  min-width: 27vw;
  display: block;
`;

export const DivImage = styled.div`
  position: relative;
  width: 30vw;
  margin-top: 100px;
  border-bottom: 0.3px solid #cccccc;
`;

export const Image = styled.img`
  width: 100%;
`;

export const DivLabel = styled.div`
  position: absolute;
  top: -30%;
  width: 100%;
  text-align: center;
`;

export const LabelTemperature = styled.label`
  font-size: 80px;
  font-weight: bold;
`;

export const LabelCelsius = styled.label`
  font-size: 60px;
  font-weight: lighter;
  position: absolute;
  display: inline-block;
  margin-top: -10px;
`;