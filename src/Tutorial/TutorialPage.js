import React, { useState } from 'react';
import '../assets.js/styles/TutorialPage.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

function TutorialPage() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {/* ... outras etapas ... */}
      {step > 1 && ( // Renderizar o botão somente se a etapa for maior que 1
        <button className="button-p" onClick={handlePrevious}>
          Anterior
        </button>
      )}
      <button
        className="button-p"
        onClick={handleNext}
        disabled={step === 5 /* última etapa */}
      >
        Próximo
      </button>
    </div>
  );
}

export default TutorialPage;
