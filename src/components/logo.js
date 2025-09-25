import React, { Component } from 'react';

import LogoPicture from '../../static/assets/ds_circle_logo.png';

export default class Logo extends Component {
    render() {
        const size = {
            heigth: this.props.size ? this.props.size : 100,
            width: this.props.size ? this.props.size : 100
        }
        return (
            <div className='logo-wrapper'>
                <img style={size} src={LogoPicture} alt="logo" />
            </div>
        );
    }
}