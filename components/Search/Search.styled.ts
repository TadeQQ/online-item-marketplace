import styled from 'styled-components';

const Form = styled.form`
  border: 2px solid black;
  border-radius: 23px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Optima, Helvetica, sans-serif;
  background-color: #f1f5f2;
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Input = styled.input`
  border: none;
  font-size: 17px;
  padding-right: 300px;
  background-color: #f1f5f2;
`;
export const SearchStyled = {
  Form,
  Button,
  Input,
};
