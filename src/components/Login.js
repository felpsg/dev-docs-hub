import { Field, Form, Formik, useFormikContext } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import backgroundImage from '../assets.js/images/javier-miranda-OiiVv1iiB0A-unsplash.jpg';

import '../assets.js/styles/login.css';

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Email inválido')
    .required('Obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(/[a-z]/, 'A senha deve ter pelo menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve ter pelo menos uma letra maiúscula')
    .matches(/\d/, 'A senha deve ter pelo menos um número')
    .matches(/[@$!%*?&]/, 'A senha deve ter pelo menos um símbolo')
    .required('Obrigatório'),
});

const Login = () => {
  const handleSubmit = (values) => {
    // Fazer chamada de API para autenticação aqui.
    // Se bem-sucedida, redirecionar: history.push('/dashboard');
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="login-box">
        <h1 className="login">Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <InputField
              name="email"
              type="email"
              placeholder="Email"
              icon="bi bi-envelope"
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              icon="bi bi-lock"
            />
            <button className="btn-l" type="submit">
              Entrar
            </button>
          </Form>
        </Formik>
        <p className="signup-text">
          Não tem uma conta?
          <Link className="signup-link" to="/cadastro">
            <i className="bi bi-person-plus signup-icon"></i> Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ name, type, placeholder, icon }) => {
  const { errors, touched, values } = useFormikContext();

  return (
    <div className="input-group">
      <i
        aria-label={`Ícone de ${placeholder.toLowerCase()}`}
        className={`input-group-icon ${icon}`}
      />
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        aria-label={placeholder}
      />
      {touched[name] && (
        <i
          className={`bi ${
            errors[name]
              ? 'bi-x-circle-fill text-danger'
              : values[name]
              ? 'bi-check text-success'
              : ''
          } error-icon`}
          title={errors[name]}
        ></i>
      )}
    </div>
  );
};

export default Login;
