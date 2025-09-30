import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Logo from './logo'; 
import SearchBar from './searchbar';
import RecentPosts from './recent-posts';

class Home extends Component {

  handleSearchbarSubmit(query) {
    this.props.fetchResultsWithQuery(query, () => {});
    this.props.history.push(`/results/${query}`);
  }

  render() {
    return (
      <div className='home'>
          <Logo />
          <SearchBar page='home' onSubmit={(query) => this.handleSearchbarSubmit(query)} />
          <RecentPosts />
      </div>

    );
  }
}

export default connect(null, actions)(Home);