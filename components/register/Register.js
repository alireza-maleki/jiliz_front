// import React from 'react';

// import classes from "./Register.module.css";

// const Register = () => {
//     return (
//         <div className={classes.register}>
//             <div className={classes.usertitle}>
//                 <h2>اطلاعات اشخاص حقیقی</h2>
//             </div>
//             <div className={classes.container}>
//                 <div className={classes.detail}>

//                     <div className={classes.right}>

//                         <div className={classes.file}>
//                             <label>عکس خود را وارد کنید</label>
//                             <input type="file" />
//                         </div>

//                         <div className={classes.person}>
//                             <label> <span>*</span> نام و نام خانوادگی</label>
//                             <select>
//                                 <option>آقای</option>
//                                 <option>خانم</option>
//                             </select>
//                             <input type="text" placeholder="نام و نام خانوادگی خود را ثبت کنید" />
//                         </div>

//                         <div className={classes.moblie}>
//                             <label> <span>*</span> موبایل</label>
//                             <input type="text" />
//                         </div>

//                         <div className={classes.phone}>
//                             <label> <span>*</span> تلفن</label>
//                             <input type="text" placeholder="شماره تلفن خود را ثبت نمایید" />
//                             <select>
//                                 <option>کد</option>
//                                 <option>+021</option>
//                             </select>
//                         </div>

//                         <div className={classes.ostan}>
//                             <label> <span>*</span> استان</label>
//                             <select>
//                                 <option>تهران</option>
//                             </select>
//                         </div>



//                     </div>

//                     <div className={classes.left}>

//                         <div className={classes.faaliat}>
//                             <label>نوع فعالیت</label>
//                             <select>
//                                 <option>-----</option>
//                                 <option>تولید کننده</option>
//                                 <option>توزیع کننده</option>
//                                 <option>وارد کننده</option>
//                                 <option>فروشنده</option>
//                                 <option>ارایه دهنده خدمات</option>
//                             </select>
//                         </div>

//                         <div className={classes.jobs}>
//                             <label>سابقه کار</label>
//                             <select>
//                                 <option>-----</option>
//                                 <option>زیر یکسال</option>
//                                 <option>یک الی سه سال</option>
//                                 <option>سه الی پنج سال</option>
//                                 <option>پنج الی ده سال</option>
//                                 <option>بیش از ده سال</option>
//                             </select>
//                         </div>

//                         <div className={classes.course}>
//                             <label>تحصیلات</label>
//                             <select>
//                                 <option>-----</option>
//                                 <option>زیر دیپلم</option>
//                                 <option>دیپلم</option>
//                                 <option>فوق دیپلم</option>
//                                 <option>لیسانس</option>
//                                 <option>فوق لیسانس</option>
//                                 <option>دکترا</option>
//                             </select>
//                         </div>

//                         <div className={classes.email}>
//                             <label>ایمیل</label>
//                             <input type="email" />
//                         </div>

//                         <div className={classes.city}>
//                             <label>شهر</label>
//                             <select>
//                                 <option>-----</option>
//                                 <option></option>
//                             </select>
//                         </div>

//                     </div>

//                 </div>

//                 <div className={classes.doneform}>

//                     <div className={classes.doneContainer}>

//                         <div className={classes.address}>
//                             <label>آدرس</label>
//                             <input type="text" placeholder="آدرس خود را وارد نمایید" />
//                         </div>

//                         <div className={classes.history}>
//                             <label>سوابق تخصصی</label>
//                             <div>
//                                 <textarea type="text" placeholder='سوابق تخصصی خود را ثبت نمایید' />
//                             </div>
//                         </div>

//                     </div>

//                 </div>

//                 <div className={classes.attention}>
//                     <div>
//                         <p>
//                             توجه داشته باشید با شماره تلفن های ثبت شده در پروفایل ، اعم از تلفن ثابت و یا تلفن همراه ، بدلیل مسائل امنیتی داده های این وبسایت ، امکان ثبت پروفایل جدید وجود نداشته و تنها با شماره تلفن های جدید امکان ثبت پروفایل جدید وجود خواهد داشت و لذا خواهشمنداست پیش از ثبت نام در وارد نمودن شماره تلفن های خود دقت لازم را داشته باشید.
//                         </p>
//                     </div>
//                 </div>

//                 <div className={classes.action}>
//                     <button>ذخیره اطلاعات</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Register

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


















