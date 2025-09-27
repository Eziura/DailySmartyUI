import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
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
            </div>
        )
    }
}
export default Results;