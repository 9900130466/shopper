

import { useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function Login(){

    const [cookies, setCookie, removeCookie] = useCookies('userid');
    const [userId, setUserId] = useState('');

    let navigate= useNavigate();


    function handleUserId(e){
        setUserId(e.target.value);
    }


    function handleLoginClick(){
        setCookie('userid', userId);
        sessionStorage.setItem('userid', userId);
        navigate('/');
    }

    return(
        <div>
            <h2>User Login</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={handleUserId} /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
        </div>
    )
}