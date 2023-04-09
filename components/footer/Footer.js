import Link from 'next/link';
import React from 'react';

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div>
                <div>
                    <Link href="/">درباره ما</Link>
                    <Link href="/">سوابق ما</Link>
                    <Link href="/">تماس با ما</Link>
                </div>
                <div>
                    <Link href="/">قوتنین و مقررات</Link>
                    <Link href="/">راهنمای خرید امن</Link>
                    <Link href="/">ثبت شکایت</Link>
                </div>
                <div>
                    <img src="./images/logo.png" />
                </div>
                <div>
                    <img src="./images/Enamad.png" />
                </div>
                <div>
                    <img src="./images/footerPic2jpg" />
                </div>
            </div>
        </div>
    )
}

export default Footer