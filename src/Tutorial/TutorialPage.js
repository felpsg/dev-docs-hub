import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setProgress } from '../store/actions';
import carSvg from '../assets.js/images/car.svg';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import '../assets.js/styles/TutorialPage.css'; // Corrigido o caminho
import { useLocation, useNavigate } from 'react-router-dom'; // Importação corrigida

const stepsComponents = [Step1, Step2, Step3, Step4];

function ProgressBar({ progress }) {
  const displayProgress = Math.min(progress, 100);

  return (
    <div className="progress-container">
      <div className="progress-road">
        <div className="progress-bar" />
        <img
          src={carSvg}
          className="car"
          style={{ left: `${displayProgress}%` }}
          alt="car"
        />
        <span className="car-percentage">{displayProgress.toFixed(0)}%</span>
        {/* Adiciona confetes quando o progresso atinge 100% */}
        {displayProgress === 100 &&
          Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="confetti show"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              }}
            />
          ))}
      </div>
    </div>
  );
}

function NavigationButton({ step, totalSteps, dispatch }) {
  const navigate = useNavigate(); // Adicionado novamente
  const handleStepChange = (change) => {
    const newStep = step + change;
    if (newStep >= 1 && newStep <= totalSteps) {
      dispatch(setStep(newStep));
      dispatch(setProgress((newStep - 1) * (100 / (totalSteps - 1))));
      navigate(`/tutorial/step${newStep}`); // Adicionado novamente
    }
  };

  return (
    <div className="navigation-buttons">
      {step > 1 && (
        <button className="button-p" onClick={() => handleStepChange(-1)}>
          Anterior
        </button>
      )}
      <button
        className="button-p"
        onClick={() => handleStepChange(1)}
        disabled={step === totalSteps}
      >
        Próximo
      </button>
      {Array.from({ length: totalSteps }, (_, index) => (
        <button
          key={index}
          className="button-step"
          onClick={() => handleStepChange(index + 1 - step)}
          disabled={step === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

function TutorialPage() {
  const totalSteps = 4;
  const dispatch = useDispatch();
  const tutorialState = useSelector((state) => state.tutorialReducer);
  const { step, progress } = tutorialState;
  const location = useLocation();

  useEffect(() => {
    const stepFromPath =
      Number(location.pathname.split('/tutorial/step')[1]) || 1;
    dispatch(setStep(stepFromPath));
    dispatch(setProgress((stepFromPath - 1) * (100 / (totalSteps - 1))));
  }, [location.pathname, dispatch, totalSteps]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Dependência da rota

  return (
    <div>
      {React.createElement(stepsComponents[step - 1])}
      <NavigationButton
        step={step}
        totalSteps={totalSteps}
        dispatch={dispatch}
      />
      <ProgressBar progress={progress} />
    </div>
  );
}

export default TutorialPage;
