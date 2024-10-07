// import firebase from 'firebase/compat/app';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../../firebase'

// creating an action creator, action creator is a function that creates an action
export const login = () => async dispatch => {
    console.log('called')
    try{
        // const provider = new firebase.auth.GoogleAuthProvider();

        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
    }
    catch(error){
        console.log('Error during google login : ', error);
    }
}