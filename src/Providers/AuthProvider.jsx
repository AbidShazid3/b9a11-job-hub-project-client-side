import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext();
const auth = getAuth(app);
// social provider
const googleProvider = new GoogleAuthProvider();

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
            console.log("current user", currentUser);
            console.log("logged user email", loggedUserEmail);

            // if (currentUser) {
            //     axios.post("https://car-doctor-server-pi-lime.vercel.app/jwt", loggedUserEmail, { withCredentials: true })
            //         .then(res => {
            //             // console.log('token response', res.data);
            //         })
            // }
            // else {
            //     axios.post("https://car-doctor-server-pi-lime.vercel.app/logout", loggedUserEmail, { withCredentials: true })
            //         .then(res => {
            //             console.log(res.data);
            //     })
            // }

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