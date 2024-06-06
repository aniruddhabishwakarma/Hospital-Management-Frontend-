import React, { useState,useEffect, useContext } from 'react'
import styles from './login.module.css'
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import UserInfoContext from '../../context/UserInfoProvider';


const Login = () => {

    const LOGIN_URL = "/auth/login";
    const {auth,setAuth,setIsAuthenticated} = useAuth();
    const navigate = useNavigate();
    const[userInfo,fetchUserInfo] = useContext(UserInfoContext);

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[error,setError] = useState({
        usernameError : "",
        passwordError : ""
    })
    const[btnState,setbtnState] = useState(true);
    const[loginButton,setLoginButton] = useState(false);

    


    useEffect(()=>{
        if(username.length>=8 && password.length>=8){
        setbtnState(false);
        }else{
        setbtnState(true)
        }
        },[username,password])
    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter' && !loginButton) {
            handleSubmit();
        }
    };

    
    const removeErrors = () => {
        setError({
            usernameError : "",
            passwordError : ""
        })
        setUsername("");
        setPassword("");
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({
                    username: username,
                    password: password
                }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            console.log("Response:", response);
    
            if (response.status === 200) {
                const accessToken = response.data.accessToken;
                setAuth({accessToken});
                setIsAuthenticated(true);
                navigate("/profile");
                fetchUserInfo();
            } else {
                throw new Error("Unexpected response status: " + response.status);
            }
        } catch (err) {
            console.error("Error:", err);
    
            if (err.response) {
                if (err.response.status === 404) {
                    setError((prevError) => ({
                        ...prevError,
                        usernameError: err.response.data.message,
                    }));
                } else if (err.response.status === 401) {
                    setError((prevError) => ({
                        ...prevError,
                        passwordError: err.response.data.message,
                    }));
                } else {
                    setError((prevError) => ({
                        ...prevError,
                        generalError: "An unexpected error occurred.",
                    }));
                }
            } else {
                setError((prevError) => ({
                    ...prevError,
                    generalError: "Network error or server did not respond.",
                }));
            }
        }
    }


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default behavior of the Enter key
                if (!loginButton) {
                    handleSubmit();
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [loginButton, handleSubmit]);

return (
<>

    <section className={styles.loginSection}>
        <div className={styles.login}>
            <h3 className = {styles.heading} onClick = {removeErrors}>Login Form</h3>
            <p><i>(Enter your details here)</i></p>
            <div className="form-floating w-75">
                <input type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="name@example.com"
                value = {username}
                onChange = {(e)=> setUsername(e.target.value)} />
                <label for="floatingInput">Username, Email or Contact</label>
                <span className = "text-danger">{error.usernameError}</span>
            </div>
            <div class="form-floating w-75">
                <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                value = {password}
                onChange={(e)=> setPassword(e.target.value)} />
                <label for="floatingPassword">Password</label>
                <span className = "text-danger">{error.passwordError}</span>
            </div>
            <button className = {styles.registerButton}><i className={styles.register}>Not Registered Yet! Click here to register</i></button>
            <button type="button" class="btn btn-primary w-75" disabled = {btnState} onClick={handleSubmit}>Login</button>
        </div>
    </section>


</>
)
}

export default Login