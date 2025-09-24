import React, { Component } from 'react';

import Logo from './logo';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo />

        <div class="search">
          <input type="text" placeholder="daily smarty" />
        </div>

        <div class="recent">
          <ul>
            <li>post</li>
            <li>post</li>
            <li>post</li>
          </ul>
        </div>

      </div>

    );
  }
}
