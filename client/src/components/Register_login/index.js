import React from 'react';
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
    return (
        <div className="page-wrapper">
            <div className = "container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Hungry Users</h1>
                        <MyButton
                            type="default"
                            title="Sign Up"
                            linkTo="/register"
                            addStyle={{
                                margin:'10px 0 0 0'
                            }}
                        />
                    </div>
                    
                    <div className="right">
                            <h1>Log In</h1>
                            <Login/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RegisterLogin;