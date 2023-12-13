// Cadastro.js

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Supondo que InputField seja um componente reutilizável
import InputField from './InputField';

const validationSchema = Yup.object({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('Email inválido').required('Email obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .required('Senha obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem coincidir')
    .required('Confirmação de senha obrigatória'),
});

const Register = () => {
  const handleSubmit = (values) => {
    // Fazer chamada de API para cadastro aqui.
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Cadastro</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <InputField
              name="name"
              type="text"
              placeholder="Nome"
              icon="bi bi-person"
            />
            <InputField
              name="email"
              type="email"
              placeholder="Email"
              icon="bi bi-envelope"
            />
            <InputField
              name="password"
              type="password"
              placeholder="Senha"
              icon="bi bi-lock"
            />
            <InputField
              name="confirmPassword"
              type="password"
              placeholder="Confirme a Senha"
              icon="bi bi-lock-fill"
            />
            <button type="submit">Cadastrar</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
