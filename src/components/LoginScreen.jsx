import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.action";

export const LoginScreen = () => {

    const dispatch = useDispatch();

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