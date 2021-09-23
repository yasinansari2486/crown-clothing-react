import React from "react";

import { Link } from "react-router-dom";

import {connect} from 'react-redux'

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/signin">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}><i class="fas fa-sign-out-alt" style={{color: "var(--ter)" , fontSize: "22px"}}></i></div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);