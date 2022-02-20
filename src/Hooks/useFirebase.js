import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const [logInEmail, setLogInEmail] = useState('');
    const [logInPassword, setlogInPassword] = useState('');

    // Sign Up input handle methods
    const changeSignUpEmail = e => {
        setSignUpEmail(e.target.value);
    }

    const changeSignUpPassword = e => {
        setSignUpPassword(e.target.value);
    }

    // Sign Up input handle methods
    const changeLogInEmail = e => {
        setLogInEmail(e.target.value);
    }

    const changeLogInPassword = e => {
        setlogInPassword(e.target.value);
    }

    const signUp = e => {   
        e.preventDefault();
        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
            setIsLoading(true);
        //   setSignUpEmail(userCredential.user);
            // console.log('succesfully register');
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            //   setError('');
            } else {

            }
            setIsLoading(false);
          });
    }, [])

    const logIn = () => {
        return signInWithEmailAndPassword(auth, logInEmail, logInPassword);
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        changeSignUpEmail,
        changeSignUpPassword,
        changeLogInEmail,
        changeLogInPassword,
        signUp,
        logIn,
        logOut,
        user,
        error,
        setError,
        isLoading
    }
}

export default useFirebase;