import React, { Component } from "react";

export default class SearchBar extends Component {
    render() {
        return (
            <form className="search-wrapper">
                <input placeholder="Search DailySmarty" />
            </form>
        );
    }
}
