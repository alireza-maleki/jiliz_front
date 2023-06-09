import React, { useEffect, useState } from "react";


const RegisterContextApi = React.createContext({
    isLoggedIn: false,
    setIsLoggedIn: (boolean) => { },
    registerCode: '',
    onLogOut: () => { },
    onLogin: (token) => { },
    setRegisterCode: (code) => { },
    userToken: '',
    setUserToken: (userToken) => { },

});


export const RegisterContextProvider = (props) => {

    // ### Handler User Loggin / Register ###
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // ### Save Register Code ###
    const [regiserCode, setRegisterCode] = useState();

    // ### Save User Token ###
    const [userToken, setUserToken] = useState('');


    // ===
    useEffect(() => {

        //  console.log('useEffect - Ctx');
        console.log(RegisterContextApi._currentValue.isLoggenIn);

        const loginStatus = localStorage.getItem('access_token');

        if (loginStatus) {
            setIsLoggedIn(true);
            // console.log('into-if')
        }

    }, []);
    console.log(isLoggedIn);

    // ===
    const loginHandler = (token) => {
        localStorage.setItem("access_token", token);
        // setIsLoggedIn(true);
    }

    // ===
    const logoutHandler = () => {
        localStorage.removeItem("access_token");
        setUserToken('');
        setIsLoggedIn(false);
    }

    // const value = {
    //     isLoggedIn: isLoggedIn,
    //     onLogin: loginHandler,
    //     onLogOut: logoutHandler 
    // }

    return (
        <RegisterContextApi.Provider
            value={{
                setIsLoggedIn: setIsLoggedIn,
                isLoggedIn: isLoggedIn,
                setRegisterCode: setRegisterCode,
                registerCode: regiserCode,
                userToken: userToken,
                setUserToken: setUserToken,
                onLogOut: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </RegisterContextApi.Provider>
    )

}

export default RegisterContextApi;