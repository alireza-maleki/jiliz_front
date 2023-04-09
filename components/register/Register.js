import { useState, useContext, useCallback, useEffect } from "react";
import classes from "./Register.module.scss";

import Router from "next/router";

import RegisterContext from "../contexts/RegisterContext";

import axios from "axios";



const Register = () => {

    const registerCtx = useContext(RegisterContext);

    // ### Save User Phone Number ###
    const [userNumber, setUserNumber] = useState();


    useEffect(() => {

        const userRegisterCode = setInterval(() => {
            localStorage.removeItem("code");
        }, 5000);

        return () => {
            clearInterval(userRegisterCode);
        }

    }, [])


    console.log(registerCtx);

    const userNumberHandler = useCallback((e) => {
        setUserNumber(e.target.value);
        // console.log(e.target.value);
    }, [userNumber]);

    // console.log(typeof userNumber)


    const formSubmitHandler = async (e) => {
        e.preventDefault();


        if (userNumber && userNumber.length > 10 && userNumber.length < 12 && !isNaN(userNumber)) {
            // console.log('into if');

            const { data } = await axios.post("https://api.vipkitchen.ir/accounts/v1/login/", {
                'phone_number': userNumber,

                headers: {
                    'Content-Type': 'application/json'
                }
            },
            );
            // console.log(data.code);

            registerCtx.setRegisterCode(data.code),


                localStorage.setItem("code", data.code),
                setUserNumber("");

            Router.push("/register-code");

        } else {
            alert("لطفا اطلاعات خود را درست وارد کنید .")
        }


    }

    const existHandler = (e) => {
        e.preventDefault();

        localStorage.removeItem("isLoggedIn");

    }


    return (
        <section className={classes.register}>

            <div className="container">

                <div className="row py-5 text-white align-items-center justify-content-center ">

                    <div className={` col-lg-8 rounded text-center p-3 ${classes.form} `}>
                        <h3>ثبت نام</h3>
                        <hr />

                        <div className={` mt-5 ${classes.inputs} `}>

                            <input style={{ direction: 'ltr' }} value={userNumber} onChange={(e) => userNumberHandler(e)} type="text" placeholder="0912-1234-567" max="11" />
                            <label> : شماره تماس</label>

                        </div>

                        <div className={` mt-5 ${classes.action} `}>
                            <button onClick={formSubmitHandler}>ارسال اطلاعات</button>
                        </div>

                        {/* <div>
                            <button onClick={existHandler}>خروج</button>
                        </div> */}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Register


















