import React, { useState } from 'react'
import classes from './styles.module.scss'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
// import { login } from 'redux/action/authAction'
import {  brandLogo } from 'utils/common/constant/constant'
import actionType from 'redux/action/authAction/actionType';
// import logo from 'assets/images/logo.svg'

const Login = (props) => {
    const dispatch = useDispatch()
    const [, forceUpdate] = useState();
    const defaultForm = {
        username : "",
        password : ""
    }

    const [form, setForm] = useState(defaultForm)

    const handleChange = ({ target }) => {
        setForm({...form, [target.name]: target.value})
        forceUpdate(1)
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const res = await dispatch(login(form));
    //     if(res.key) {
    //         navigate(ROUTES.USERS_PATH)
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({
            type: actionType.LOGIN,
            payload: {key :"token", user:"Admin"}
        })
        localStorage.setItem('token', "admin")
    }
    return (
        <div className={classes.login}>
            <div className={classes.login_container}>
                <div className={classes.logo}>
                    <img src={brandLogo} alt="logo" />
                </div>
                <form className={classes.login_form}>
                    <h2>Login</h2>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className='input-form' 
                            placeholder='Username' 
                            onChange={handleChange} 
                            value={form.username} 
                            name="username" 
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="password" 
                            className='input-form' 
                            placeholder='Password' 
                            onChange={handleChange} 
                            value={form.password} 
                            name="password" 
                        />
                    </div>
                    <div className="mb-3">
                        <Button onClick={handleSubmit} variant="contained" className='primaryBtn'>Sign in</Button>
                    </div>
                    <p><Link to="">Forgot Password?</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login