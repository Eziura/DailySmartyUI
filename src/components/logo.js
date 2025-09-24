import React, { Component } from 'react';

import LogoPicture from '../../static/assets/ds_circle_logo.png';

export default class Logo extends Component {
    render() {
        return (
            <div className='logo-wrapper'>
                <img src={LogoPicture} alt="logo" />
            </div>
        );
    }
}