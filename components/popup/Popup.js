import React, { useContext, useState } from 'react';
import Link from 'next/link';

import classes from "./Popup.module.css";

import RegisterContext from "../contexts/RegisterContext";
import Router from 'next/router';


const Popup = (props) => {

    const registerCtx = useContext(RegisterContext);

    const [close, setClose] = useState(true);

    const closeHandler = () => {
        setClose(false);
    }



    return (
        <>
            {close && (
                <div className={classes.popup} onClick={closeHandler}>
                    <div className={classes.container}>
                        <div className={classes.head}>
                            <p>نوع آگهی رایگان خود را انتخاب کنید</p>
                        </div>
                        <div className={classes.links}>
                            <Link href={!registerCtx.userToken ? '/register' : '/khadamat'}>
                                خدمات
                            </Link>
                            <Link href="/sabt-rahandazi">
                                ثبت و راه اندازی
                            </Link>
                            <Link href="/estekhdam">
                                استخدام
                            </Link>
                        </div>
                        <div className={classes.action}>
                            <button onClick={closeHandler}>بستن</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup;