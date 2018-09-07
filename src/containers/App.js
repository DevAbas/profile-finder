import React, { Component } from 'react';

// Components
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Profile from '../components/Profile/Profile';


class App extends Component {

  state = {
    user: null,
    repos: [],
    error: false
  }


  handleSearchInput = async (e) => {
    const targetUser = e.target.value;
    const client_id = 'fd909aff2e512dc8b9bf';
    const client_secret = 'KEY';
    const repos_count = 3;
    const repos_sort = 'created: asc';
    
    if(targetUser !== '') {
      const profileResponse = await fetch(`https://api.github.com/users/${targetUser}?client_id=${client_id}&client_secret=${client_secret}`);
      const reposResponse = await fetch(`https://api.github.com/users/${targetUser}/repos?per_page=${repos_count}&sort=${repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const profile = await profileResponse.json();
      const repos = await reposResponse.json();
      this.setState({
        user: profile,
        repos
      })
    } else {
      this.setState({
        user: null,
        repos: []
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
          <Search handleSearch={this.handleSearchInput} />
          { this.state.user !== null &&
            <Profile profile={this.state.user} repos={this.state.repos}/>
          }
      </div>
    );
  }
}

export default App;
