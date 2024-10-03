import firebase from 'firebase/compat/app';
import auth from '../../firebase'

// creating an action creator, action creator is a function that creates an action
export const login = () => async dispatch => {
    try{
        const provider = new firebase.auth.GoogleAuthProvider();

        const res = await auth.signInWithPopup(provider);
        console.log(res);
    }
    catch(error){

    }
}