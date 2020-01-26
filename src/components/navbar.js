import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = (props)=> {
    // setTimeout(() => {
    //     props.history.goBack();
    // }, 5000);
return(
    <nav className="nav-wrapper red-darken-3">
        <div className="container">
            <Link to="/" className="brand-logo">Poke'Times</Link>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about" >About</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>

            </ul>
        </div>
    </nav> 
)
}
export default withRouter(Navbar);