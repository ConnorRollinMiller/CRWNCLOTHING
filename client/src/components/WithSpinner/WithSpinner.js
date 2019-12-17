import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
   isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

WithSpinner.propTypes = {
   isLoading: PropTypes.bool.isRequired
};

export default WithSpinner;
