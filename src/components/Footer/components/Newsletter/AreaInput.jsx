import PropTypes from 'prop-types';
import React from 'react';

const AreaInput = ({ label, placeholder, buttons }) => {
  return (
    <div className="fields-nl">
      <div className="field">
        <label htmlFor="email">{label}</label>
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          required=""
          data-required-message="Votre email est obligatoire"
          data-email-message="Votre email est incorrect"
          aria-required="true"
        />
      </div>
      {buttons.map((button) => {
        return (
          <button
            key={button.id}
            action={button.link}
            value={button.label}
            className="button ea-tracker"
            type="submit">
            {button.label}
          </button>
        );
      })}
    </div>
  );
};

AreaInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default AreaInput;
