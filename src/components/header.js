import React ,{ Component} from 'react';

import logo from '../images/Logo.png'
class Header extends Component {
    render(){
        return(
            <div className="header">
                <img src={logo} className="logo"/>
                Smart Home
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        );
    }
}



export default Header