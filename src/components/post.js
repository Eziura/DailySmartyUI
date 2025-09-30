import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }
    }

    //No aplica en portfolio items

    // getNameForPostLink(str) {
    //     var n = str.lastIndexOf('/');
    //     var link = str.substring(n + 1, str.length);

    //     if((n+1) == str.length) {
    //         link = str.slice(0, n);
    //         n = link.lastIndexOf('/');
    //         link = str.substring(n + 1, str.length - 1);
    //     }    

    //     if(link.includes('.html')) {
    //         link = link.substring(0, link.length - 5);
    //     }
    //     if(link.includes('.htm')) {
    //         link = link.substring(0, link.length - 4);
    //     }

    //     return link;
    // }

    // renderLinks() {
    //     let links = this.props.post_links.map((post_link, index) => {
    //         return (
    //             <div className="post-link" key={index}>
    //                 <div className="post-link__box"></div>
    //                 <div className="post-link__link">
    //                     <a href={post_link.link_url}>Useful Link #{index + 1}</a>
    //                 </div>
    //             </div>
    //         )
    //     })
    //     return links;
    // }

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
                <div className='result-post'
                    onMouseEnter={() => this.setState({ height: 80 })}
                    onMouseLeave={() => this.setState({ height: 0 })}
                >
                    <div className='result-posts-title'>
                        {this.props.name}
                    </div>
                    <div className='result-posts-description'>
                        <a href={this.props.url}>
                            {this.props.description}
                        </a>
                    </div>

                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >

                        <div className='result-post-link'>
                            <div className='post-link-box'></div>
                            <div className='post-link-link'>
                                <a href={this.props.url}>Read More</a>
                            </div>
                        </div>
                    </AnimateHeight>
                </div>
            )
        }
    }
}
export default Post;