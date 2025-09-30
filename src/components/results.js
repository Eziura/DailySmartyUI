import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import ResultsPosts from './results-posts';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {
    handleSearchBarSubmit(query) {
        this.props.fetchResultsWithQuery(query);
    }

    render() {
        const { posts } = this.props;
        return (
            <div className='results'>
                <Logo size={50} />
                <SearchBar page='results' onSubmit={(query) => this.handleSearchBarSubmit(query)} />
                {
                    posts && posts.length > 0 ?
                        <ResultsPosts posts={posts} /> :
                        <div className='no-matches'>No Matches</div>
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.resultsPosts
    }
}

export default connect(mapStateToProps, actions)(Results);