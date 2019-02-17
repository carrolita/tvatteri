import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light navbar-color">
        <Link class="navbar-brand" to="/home">Tvättenergi</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Om oss</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Kontakta</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tjänster
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">lalala</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Navbar;
