import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';

import './Directory.scss';

const Directory = ({ sections }) => (
   <div className='directory-menu'>
      {sections.map(({ id, ...sectionProps }) => (
         <MenuItem key={id} {...sectionProps} />
      ))}
   </div>
);

Directory.propTypes = {
   sections: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
