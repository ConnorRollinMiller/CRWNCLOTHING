import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ history, match, title, imageUrl, size, linkUrl }) => (
   <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
   >
      <div
         style={{ backgroundImage: `url(${imageUrl})` }}
         className='background-image'
      />
      <div className='content'>
         <h1 className='title'>{title.toUpperCase()}</h1>
         <span className='subtitle'>SHOP NOW</span>
      </div>
   </div>
);

MenuItem.propTypes = {
   history: PropTypes.object.isRequired,
   match: PropTypes.object.isRequired,
   title: PropTypes.string.isRequired,
   imageUrl: PropTypes.string.isRequired,
   linkUrl: PropTypes.string.isRequired,
   size: PropTypes.string
};

export default withRouter(MenuItem);
