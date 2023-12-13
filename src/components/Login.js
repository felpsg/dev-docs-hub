// Login.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

// Importe o InputField
import InputField from './InputField'; // Ajuste o caminho conforme necessário

import backgroundImage from '../assets.js/images/javier-miranda-OiiVv1iiB0A-unsplash.jpg';
import '../assets.js/styles/login.css';

const validationSchema = Yup.object({
  // suas regras de validação...
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
            {/* Use o InputField reutilizável */}
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
          <Link className="signup-link" to="/Cadastro">
            <i className="bi bi-person-plus signup-icon"></i> Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
