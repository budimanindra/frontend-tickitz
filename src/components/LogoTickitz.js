import React, { Component } from 'react'
import Logo from '../components/assets/tickitz.png';
import './LogoTickitz.css'

class LogoTickitz extends Component {
    render() {
        return (
            <div>
                <img src={Logo} className="Logo" alt="logo" />
            </div>
        )
    }
}

export default LogoTickitz