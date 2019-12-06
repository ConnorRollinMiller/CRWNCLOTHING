import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';

const DirectoryMenuContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

const Directory = ({ sections }) => (
   <DirectoryMenuContainer>
      {sections.map(({ id, ...sectionProps }) => (
         <MenuItem key={id} {...sectionProps} />
      ))}
   </DirectoryMenuContainer>
);

Directory.propTypes = {
   sections: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
