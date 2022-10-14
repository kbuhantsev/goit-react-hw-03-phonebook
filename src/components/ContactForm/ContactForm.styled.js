import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FieldStyled = styled(Field)`
  margin-left: 10px;
`;

export const ButtonStyled = styled(Button)`
  /* display: inline-flex; */
  width: fit-content;
`;
