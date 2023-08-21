import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationButton({ step, totalSteps, handleStepChange }) {
  const navigate = useNavigate();

  return (
    <div className="navigation-buttons">
      {step > 1 && (
        <button
          className="button-p"
          onClick={() => handleStepChange(-1, navigate)}
        >
          Anterior
        </button>
      )}
      <button
        className="button-p"
        onClick={() => handleStepChange(1, navigate)}
        disabled={step === totalSteps}
      >
        Próximo
      </button>
      {Array.from({ length: totalSteps }, (_, index) => (
        <button
          key={index}
          className="button-step"
          onClick={() => handleStepChange(index + 1 - step, navigate)}
          disabled={step === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default NavigationButton;
