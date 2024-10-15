import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/auth.action";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.auth.accessToken);

    const navigate = useNavigate();

    useEffect(() => {
        if(accessToken){
            navigate("/"); //navigate to home route
        }

    }, [accessToken, navigate])

    const handleLogin = () => {
        console.log('button clicked');
        dispatch(login());
    }

    return(
        <div>
            <div>
                <h2 className="bg-red-400">YouTube</h2>
                <button className="bg-blue-400" onClick={handleLogin}>Login with Google</button>
            </div>
        </div>
    )
}