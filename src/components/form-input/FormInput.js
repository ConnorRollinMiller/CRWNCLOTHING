import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
   <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label && (
         <label
            className={`${otherProps.value.length &&
               'shrink'} form-input-label`}
         >
            {label}
         </label>
      )}
   </div>
);

FormInput.propTypes = {
   handleChange: PropTypes.func.isRequired,
   label: PropTypes.string.isRequired
};

export default FormInput;
