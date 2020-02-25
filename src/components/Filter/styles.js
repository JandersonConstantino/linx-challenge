import styled from 'styled-components';
import { secondary, lightPurple } from 'core/colors';

export const Label = styled.label`
  color: ${secondary};
  display: inline-block;
  margin-top: 6px;
  font-size: 30px;
  font-weight: bold;
`;

export const Container = styled.div`
  display: block;
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const FormControl = styled.div`
  display: flex;
  padding: 15px;
  border-radius: 18px;
  border: 1px solid ${lightPurple};;
`;

export const Input = styled.input`
  border: none;
  color: ${secondary};
  width: 100%;
  font-size: 16px;
  background-color: transparent;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${lightPurple};
    opacity: 1;
  }
`;

export const SearchButton = styled.button`
  border: none;
  color: transparent;
  background-color: transparent;

  :focus {
    cursor: pointer;
    outline: none;
  }
`;

export const Icon = styled.img`
  width: 25px;
`;
