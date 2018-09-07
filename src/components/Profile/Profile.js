import React from 'react';

import Repos from '../Repos/Repos';
import classes from './Profile.css';

const profile = ({ profile, repos }) => {
  return (
    <div className={classes.Profile}>
          {
            profile.message === 'Not Found' ? <p className={classes.NotFound}>User not found</p> : 
            <div>
            <div className={classes.left_bar}>
            <figure>
              <img className={classes.Profile__image} src={`${profile.avatar_url}`} alt={`${profile.name}`}/>
            </figure>
            <span className={`${classes.badge} ${classes.badgeDefault}`}>Public repos: {profile.public_repos}</span>
            <span className={`${classes.badge} ${classes.badgeSuccess}`}>Public gists: {profile.public_gists}</span>
            <span className={`${classes.badge} ${classes.badgePrimary}`}>Followers: {profile.followers}</span>
            <span className={`${classes.badge} ${classes.badgeWarning}`}>Following: {profile.following}</span>
            <a className={classes.view_profile} href={`${profile.html_url}`} target="_blank">View Profile on Github</a>
          </div> 
          <div className={classes.right_bar}>
            <ul>
              <li>Company: <span>{profile.company ? profile.company: 'This user has not write company name own profile' }</span></li>
              <li>Web Site / Blog: <span>{profile.blog ? profile.blog : 'This user has not write blog or any website address own github profile'}</span></li>
              <li>Location: <span>{profile.location ? profile.location : 'This user has not write any location own github profile'}</span></li>
              <li>Member Since: <span>{profile.created_at}</span></li>
            </ul> 
            { repos.length > 0 &&
              <Repos repos={repos} />
            } 
          </div>
            </div>
          }
    </div>
  )
}

export default profile;