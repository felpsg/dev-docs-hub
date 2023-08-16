import React, { useState } from 'react';
import '../assets.js/styles/TutorialPage.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

function TutorialPage() {
  const totalSteps = 4; // Altere este valor de acordo com o número total de etapas
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const stepsComponents = [<Step1 />, <Step2 />, <Step3 />, <Step4 />]; // Array de componentes de etapas

  const handleNext = () => {
    if (step < totalSteps) {
      const nextStep = step + 1;
      setStep(nextStep);
      setProgress((nextStep - 1) * (100 / (totalSteps - 1)));
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      const prevStep = step - 1;
      setStep(prevStep);
      setProgress((prevStep - 1) * (100 / (totalSteps - 1)));
    }
  };

  return (
    <div>
      {stepsComponents[step - 1]} {/* Renderizar componente baseado no passo */}
      <div className="navigation-buttons">
        {step > 1 && (
          <button className="button-p" onClick={handlePrevious}>
            Anterior
          </button>
        )}
        <button className="button-p" onClick={handleNext} disabled={step === totalSteps}>
          Próximo
        </button>
        {Array.from({ length: totalSteps }, (_, index) => (
          <button
            key={index}
            className="button-step"
            onClick={() => {
              const selectedStep = index + 1;
              setStep(selectedStep);
              setProgress((selectedStep - 1) * (100 / (totalSteps - 1)));
            }}
            disabled={step === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}>
          <span className="progress-percentage" style={{ color: progress > 100 ? '#fff' : '#000' }}>
            {progress.toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default TutorialPage;
