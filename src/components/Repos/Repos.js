import React from 'react';

import classes from './Repos.css'

const repos = ({ repos }) => {
  let showRepos;
  if(repos.length > 0 || repos !== undefined) {
    showRepos = repos.map((repo) => (
      <div key={repo.id} className={classes.Repos_detail}>  
        <a href={`${repo.html_url}`}>{repo.name}</a>
        <span className={`${classes.badge} ${classes.badgeSuccess}`}>Stars: {repo.stargazers_count}</span>
        <span className={`${classes.badge} ${classes.badgeDefault}`}>Watchers: {repo.watchers}</span>
        <span className={`${classes.badge} ${classes.badgePrimary}`}>Forks: {repo.forks_count}</span>
      </div>
    ))
  }

  return (
    <div className={classes.Repos}>
      {showRepos}
    </div>
  )
};

export default repos;