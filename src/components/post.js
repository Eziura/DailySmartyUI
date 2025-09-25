import React, { Component } from 'react';


class Post extends Component {
    render() {
        return (
            <li className='recent-posts-wrapper'>
                <div className='recent-posts-title'>
                    {this.props.name}
                </div>
                <div className='recent-posts-description'>
                    <span>{this.props.description} </span>
                </div>
            </li>
        )
    }
}

export default Post;