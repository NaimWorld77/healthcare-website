import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();



const useFirebase =()=>{

    const [user,setUser] = useState({});
    
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle =()=>{
        return signInWithPopup(auth,googleProvider);
        
    }


      const [email,setEmail] = useState('');
      const [error,setError] = useState('');

    const [password,setPassword] =useState('');


    const handleRegister=(e)=>{
        e.preventDefault();
        if(password.length<6){
            setError('Password should be at least 6 characters');
            return
            }
        register();
        console.log(email,password);
     }
        const handleLogin =(e)=>{
            e.preventDefault();
            handleLogin();
         }


    console.log(user);

    const register=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
        setUser(result.user);
        setError('');
    
  })
    }


    const handleEmail= (e) =>{
        setEmail(e.target.value);
    }

     const Login =(e)=>{
        // e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user)
        })
     }





    const handlePassword =(e) =>{
        setPassword(e.target.value);
    }

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
        handleEmail,
        handlePassword,
        handleRegister,
        handleLogin,
        error


    }

}
export default useFirebase;
