import React, { Component } from 'react'
import Logo from '../components/assets/tickitzlarge.png';
import './LogoTickitz.css'

class LogoTickitzLarge extends Component {
    render() {
        return (
            <div>
                <img src={Logo} className="LogoLarge" alt="logo" />
            </div>
        )
    }
}

export default LogoTickitzLarge