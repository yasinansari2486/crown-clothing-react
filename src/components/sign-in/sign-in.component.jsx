import React from "react";

import FormInput from '../form-input/form-input.component';

import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import axiosInstance from '../../axios/login';
import { useHistory } from 'react-router-dom';
import FbLogin from 'react-facebook-login';
import facebookLogin from '../../axios/facebookLogin';

import './sign-in.styles.scss';



class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]: value})
    }

    render() {

        const responseFacebook =  async(response) => {
            facebookLogin(response.accesstoken);
        };

        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email}  handleChange={this.handleChange} label='email' required />
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label='password' required />

                    <CustomButton type="submit">Sign In</CustomButton>
                    {/* <CustomButton onClick={signInWithGoogle}>
                        {''}
                        Sign in with google{''}
                    </CustomButton> */}
                    <FbLogin
						appId="410495577459528"
						fields="name,email,picture"
						callback={responseFacebook}
					/>
                </form>
            </div>
        )
    }
}

export default SignIn;