import React from 'react';

import classes from './Search.css';

const search = (props) => (
  <div className={classes.Search}>
    <h2>Search GitHub Users</h2>
    <h3>Enter a username to fetch a user profile and repos from Github</h3>
    <input type="text" placeholder="Github username ..." onChange={(e) => props.handleSearch(e)} />
  </div>
)

export default search;