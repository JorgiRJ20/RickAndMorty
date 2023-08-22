import React,{useState, createContext} from 'react';
import { UserDB, userDBDetails } from '../utils/userDB';


export const AuthContext = createContext();

export function AuthProvider({children}){

    const [auth,setAuth] = useState(false);
    const [message,setMessage] = useState(null);
    const [userDATA,setUserDATA] = useState(UserDB);

    const login = (username,password) => {
        console.log(username,password,"firstname")
        if(username === UserDB.nickname && password === UserDB.password){
            setAuth(true);
            console.log(auth,"auth")

        }else{
            setMessage("Usuario o contraseña incorrectos");
        }
    }

    const logout = () => {
        setAuth(false);
        setUserDATA(null);
    }

    const valueContext = {
        auth,
        login,
        logout,
        message,
        userDATA

    }
    return <AuthContext.Provider value={valueContext} >
        {children}
    </AuthContext.Provider>
}