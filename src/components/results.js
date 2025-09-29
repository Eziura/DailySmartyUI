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
        return (
            <div>
                <Logo size={50} />
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
                < ResultsPosts />
            </div>
        )
    }
}
export default connect(null, actions)(Results);