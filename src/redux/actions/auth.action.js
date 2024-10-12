// import firebase from 'firebase/compat/app';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../../firebase'
import { LOGIN_REQUEST } from "../actionTypes";

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
            name: res._tokenResponse.displayName;
        }
    }
    catch(error){
        console.log('Error during google login : ', error);
    }
}