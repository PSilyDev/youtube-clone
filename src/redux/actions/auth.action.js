// import firebase from 'firebase/compat/app';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

// creating an action creator, action creator is a function that creates an action
export const login = () => async dispatch => {
    console.log('called')
    try{
        // const provider = new firebase.auth.GoogleAuthProvider();
        dispatch({
            type: LOGIN_REQUEST,

        })

        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);

        const accessToken = res._tokenResponse.idToken;

        const profile = {
            name: res.user.displayName,
            photoURL: res.user.photoURL,
        }

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken,
        })

        dispatch({
            type: LOAD_PROFILE,
            payload: profile,
        })
    }
    catch(error){       
        console.log('Error during google login : ', error);

        dispatch({
            type: LOGIN_FAIL,
            payload: error.message,
        })
    }
}