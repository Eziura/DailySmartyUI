import React, { Component } from 'react';


class Post extends Component {
    render() {
        return (
            <div className='recent-posts-wrapper'>
                <div className='recent-posts-title'>
                    {this.props.name}
                </div>
                <div className='recent-posts-description'>
                    <span>{this.props.description} </span>
                </div>
            </div>
        )
    }
}

export default Post;