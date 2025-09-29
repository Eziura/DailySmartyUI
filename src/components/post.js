import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }
    }
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
                        <a href={this.props.url}
                            onMouseEnter={() => this.setState({ height: 70 })}
                            onMouseLeave={() => this.setState({ height: 0 })}
                        >{this.props.description}
                        </a>

                    </div>

                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >

                        <div className='recent-posts-link'>
                            <a href={this.props.url}>Read More</a>
                        </div>
                    </AnimateHeight>
                </div>
            )
        }
    }
}
export default Post;