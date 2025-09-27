import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './searchbar';
import RecentPosts from './recent-posts';

export default class Home extends Component {

  handleSearchbarSubmit(query ) {
    console.log('trying to handle submit for query', query);
    this.props.history.push(`/results/${query}`);
  }

  render() {
    return (
      <div>
        <div>
          <Logo />
          <SearchBar onSubmit={(query) => this.handleSearchbarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>

    );
  }
}
