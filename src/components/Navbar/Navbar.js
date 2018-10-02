import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="nav-parent">
                    <div className=" link ContactUs">Contact us</div>
                    <div className=" link center-link">Ryan Stupey</div>
                    <div className=" link About"> About</div>
                </div>
            </div>
        );
    }
}