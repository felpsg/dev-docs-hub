import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setStep, setProgress } from '../store/actions';

import CssStep1 from './Css/Step1';
import CssStep2 from './Css/Step2';
import CssStep3 from './Css/Step3';

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

const cssSteps = [CssStep1, CssStep2, CssStep3];
const javascriptSteps = [
  JavaScriptStep1,
  JavaScriptStep2,
  JavaScriptStep3,
  JavaScriptStep4,
];
const reactSteps = [ReactStep1, ReactStep2, ReactStep3];

// Função do componente da página do tutorial
function TutorialPage({ tutorialType }) {
  const tutorialStartRef = useRef(null);
  let stepsComponents;

  switch (tutorialType) {
    case 'react':
      stepsComponents = reactSteps;
      break;
    case 'javascript':
      stepsComponents = javascriptSteps;
      break;
    case 'css':
      stepsComponents = cssSteps;
      break;
    default:
      stepsComponents = [];
  }

  const totalSteps = stepsComponents.length;

  const dispatch = useDispatch();
  const tutorialState = useSelector((state) => state.tutorialReducer);
  const { step, progress } = tutorialState;

  const location = useLocation();
  const navigate = useNavigate();

  const handleStepChange = (change) => {
    const newStep = step + change;
    if (newStep >= 1 && newStep <= totalSteps) {
      dispatch(setStep(newStep));
      dispatch(setProgress((newStep - 1) * (100 / (totalSteps - 1))));
      const path = `/tutorial/${tutorialType}/step${newStep}`;
      navigate(path);
    }
  };

  useEffect(() => {
    const stepFromPath =
      Number(location.pathname.split(`/tutorial/${tutorialType}/step`)[1]) || 1;
    dispatch(setStep(stepFromPath));
    dispatch(setProgress((stepFromPath - 1) * (100 / (totalSteps - 1))));
  }, [location.pathname, dispatch, totalSteps, tutorialType]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (tutorialStartRef.current) {
        tutorialStartRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      console.log('Scrolling to top');
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div ref={tutorialStartRef}>
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
