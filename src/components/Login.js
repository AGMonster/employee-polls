import { handleSetAuthedUser } from "../actions/shared";
import { connect } from 'react-redux'
import { useRef } from "react";
import { useLocation } from 'react-router-dom'
import mainLogo from './../logo.png'

const Login = ({dispatch}) => {
    const elementRef = useRef(); 
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(handleSetAuthedUser(elementRef.current.value))
    }

    const currentPath = useLocation().pathname;

    return(
        <div className="login-form">
            <img src={mainLogo} className="App-logo" alt="logo" />
            { currentPath !== '/' && <p> Please login !!</p> }
            <label>Login as</label>
            <select data-testid="user-select" ref={elementRef} className='user-select'>
                <option className="user-option">sarahedo</option>
                <option className="user-option">tylermcginnis</option>
                <option className="user-option">johndoe</option>
            </select>
            <button data-testid="login-btn" className="login-btn" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default connect()(Login);