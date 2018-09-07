import React from 'react';

import classes from './Header.css';

const header = () => (
  <div className={classes.Header}>
    <div className={classes.Header__container}>
      <a href="/" className={classes.Header__brand}>GitHub Finder</a>
    </div>
  </div>
)

export default header;