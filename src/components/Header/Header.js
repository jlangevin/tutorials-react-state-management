import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as classes from './Header.module.css';

class Header extends Component {
  
  render() {
    console.log('classes', classes);
    return (
      <div>
        <ul className={classes.Header}>
          <li><Link to="/props">Props</Link></li>
          <li><Link to="/context">Context</Link></li>
          <li><Link to="/redux">Redux</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;