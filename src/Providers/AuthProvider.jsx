import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";


export const AuthContext = createContext();
const auth = getAuth(app);
// social provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register
    const createUser = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // update profile
    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // log in
    const logInUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // google log in
    const googleLogInUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // github log in
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    // sign out
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUserEmail = { email: userEmail };
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                axios.post("http://localhost:5000/jwt", loggedUserEmail, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post("http://localhost:5000/logout", loggedUserEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                })
            }

        });
        return () => {
            return unSubscribe();
        }

    }, [user])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        logInUser,
        googleLogInUser,
        githubLogIn,
        logOutUser
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;