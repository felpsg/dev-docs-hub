// InputField.js
import React from 'react';
import { Field, useFormikContext } from 'formik';

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
        <div
          className={`validation-message ${
            errors[name] ? 'text-danger' : 'text-success'
          }`}
          style={{ marginLeft: '10px' }}
        >
          {errors[name] ? (
            errors[name]
          ) : values[name] ? (
            <span>
              <i className="bi bi-check-circle-fill"></i>
            </span>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
