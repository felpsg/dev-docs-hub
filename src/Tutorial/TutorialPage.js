import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setProgress } from '../store/actions';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import '../assets.js/styles/TutorialPage.css';
import { useLocation } from 'react-router-dom';

const stepsComponents = [Step1, Step2, Step3, Step4];

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}>
        <span
          className="progress-percentage" // Adicione sua classe aqui
          style={{ color: progress > 100 ? '#fff' : '#000' }}
        >
          {progress.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}

function NavigationButton({ step, totalSteps, dispatch }) {
  const handleStepChange = (change) => {
    const newStep = step + change;
    if (newStep >= 1 && newStep <= totalSteps) {
      dispatch(setStep(newStep));
      dispatch(setProgress((newStep - 1) * (100 / (totalSteps - 1))));
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
