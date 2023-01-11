import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  display: flex;
  border: 2px solid #f5d3ac;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba (0, 0, 0, 0.65);
  height: 420px;
  margin: 6rem auto 8.1rem auto;
  width: 500px;
`;
const Header = styled.div`
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
`;

const Content = styled.div`
  padding: 10px 20px;
`;

const Form = styled.form`
  display: flex;
  column-gap: 20px;
`;

const Column = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
`;

const FormContent = styled.input`
  border: none;
  outline: none;
  padding-top: 14px;
`;

const SubmitButton = styled.button`
  background: #f5d3ac;
  border: none;
  border-radius: 21px;
  box-shadow: 0px 5px 5px #fce7ce;
  cursor: pointer;
  color: white;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 70px;
  transition: 0.25s;
  width: 153px;
`;

const FormBorder = styled.div`
  background: #f5d3ac;
  height: 1px;
  width: 100%;
`;
const Label = styled.label`
  padding-top: 10px;
`;
const CheckboxLabel = styled.label`
  margin-top: 10px;
  margin-left: 5px;
`;
const IsAccount = styled.div`
  margin: 0 auto;
  margin-top: 10px;
`;

export const FormStyled = {
  Header,
  Container,
  Content,
  Form,
  Column,
  FormContent,
  SubmitButton,
  FormBorder,
  Label,
  IsAccount,
  CheckboxLabel,
};
