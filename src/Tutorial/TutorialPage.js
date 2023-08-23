import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setProgress } from '../store/actions';

import JavaScriptStep1 from './JavaScript/Step1';
import JavaScriptStep2 from './JavaScript/Step2';
import JavaScriptStep3 from './JavaScript/Step3';
import JavaScriptStep4 from './JavaScript/Step4';

import ReactStep1 from './React/Step1';
import ReactStep2 from './React/Step2';
import ReactStep3 from './React/Step3';

import '../assets.js/styles/TutorialPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import NavigationButton from './NavigationButton';

const javascriptSteps = [
  JavaScriptStep1,
  JavaScriptStep2,
  JavaScriptStep3,
  JavaScriptStep4,
];

const reactSteps = [ReactStep1, ReactStep2, ReactStep3];

function TutorialPage({ tutorialType }) {
  const stepsComponents =
    tutorialType === 'react' ? reactSteps : javascriptSteps;
  const totalSteps = stepsComponents.length;
  const dispatch = useDispatch();
  const tutorialState = useSelector((state) => state.tutorialReducer);
  const { step, progress } = tutorialState;
  const location = useLocation();
  const navigate = useNavigate();

  console.log('Location Path:', location.pathname);

  const handleStepChange = (change) => {
    console.log('handleStepChange called');
    const newStep = step + change;
    if (newStep >= 1 && newStep <= totalSteps) {
      dispatch(setStep(newStep));
      dispatch(setProgress((newStep - 1) * (100 / (totalSteps - 1))));
      const path =
        tutorialType === 'react'
          ? `/tutorial/react/step${newStep}`
          : `/tutorial/javascript/step${newStep}`;

      console.log('Navigating to:', path);
      navigate(path);
    }
  };

  useEffect(() => {
    const stepFromPath =
      Number(location.pathname.split(`/tutorial/${tutorialType}/step`)[1]) || 1;
    dispatch(setStep(stepFromPath));
    dispatch(setProgress((stepFromPath - 1) * (100 / (totalSteps - 1))));

    console.log('Step from path:', stepFromPath);
  }, [location.pathname, dispatch, totalSteps, tutorialType]);

  useEffect(() => {
    console.log('Scrolling to top');
    window.scrollTo(0, 0);
  }, [location.pathname]); // Dependência da rota

  return (
    <div>
      {console.log('Rendering step:', step)}
      {React.createElement(stepsComponents[step - 1], {
        step,
        totalSteps,
        handleStepChange,
        progress,
      })}
      <NavigationButton
        step={step}
        totalSteps={totalSteps}
        handleStepChange={handleStepChange}
      />
      <ProgressBar progress={progress} />
    </div>
  );
}

export default TutorialPage;
