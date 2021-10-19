import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, createUserWithEmailAndPassword,} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();



const useFirebase =()=>{

    const [user,setUser] = useState({});
    
    // const [email,setEmail] = useState({});

    // const [password,setPassword] =useState({});

        


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle =()=>{
        return signInWithPopup(auth,googleProvider);
        
    }
    // const signInUsingEmailPassword =()=>{

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //             setEmail(email);
    //           })
    //         }

   const logOut=()=>{
        signOut(auth)
        .then(() =>{
            setUser({})
          })
        }

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
          });
          
    },[])

    return {
        user,
        signInUsingGoogle,
        logOut,

    }

}
export default useFirebase;
