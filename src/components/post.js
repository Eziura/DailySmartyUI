import React, { Component } from 'react';


class Post extends Component {
    render() {
        if (this.props.type == 'recent') {
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
        } else if (this.props.type == 'results') {
            return (
                <div className='recent-posts-wrapper'>
                    <div className='recent-posts-title'>
                        {this.props.name}
                    </div>
                    <div className='recent-posts-description'>
                        <span>{this.props.description} </span>
                    </div>
                    <div className='recent-posts-description'>
                        <a href={this.props.url}>Read More</a>
                    </div>
                </div>
            )
        }
    }
}
export default Post;