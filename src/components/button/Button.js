import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
   <button
      className={`${inverted && 'inverted'} custom-button`}
      {...otherProps}
   >
      {children}
   </button>
);

Button.propTypes = {
   children: PropTypes.string.isRequired
};

export default Button;
