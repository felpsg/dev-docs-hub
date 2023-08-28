import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Adicione o 'useNavigate' aqui
import '../assets.js/styles/header.css';
import rocketIcon from '../assets.js/images/rocket-icon1.png';
import { auth } from '../firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const Header = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate(); // useNavigate em vez de useHistory

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuário logado com sucesso:', userCredential);
        navigate('/'); // Redireciona para a página inicial
      })
      .catch((error) => {
        console.error('Erro no login:', error);
        console.error('Código do erro:', error.code);
        console.error('Mensagem do erro:', error.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuário criado com sucesso:', userCredential);
        navigate('/'); // Redireciona para a página inicial
      })
      .catch((error) => {
        console.error('Erro no cadastro:', error);
        console.error('Código do erro:', error.code);
        console.error('Mensagem do erro:', error.message);
      });
  };

  return (
    <header>
      <nav className="navbar">
        <div className="menu-container">
          <div className="logo-container">
            <Link to="/" id="logo" className="navbar-brand">
              CodeHub
              <img src={rocketIcon} alt="Rocket Icon" className="rocket-icon" />
            </Link>
          </div>
          <div className="right-container">
            <button
              type="button"
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Cadastro
            </button>
          </div>
        </div>
      </nav>

      {/* Modal Login */}
      <div className="modal fade" id="loginModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-outline-success">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Cadastro */}
      <div className="modal fade" id="signupModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cadastro</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSignUp}>
                <div className="mb-3">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-outline-secondary">
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
