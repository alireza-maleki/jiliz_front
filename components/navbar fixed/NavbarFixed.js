import React from 'react';

import classes from "./NavbarFixed.module.css";

const NavbarFixed = () => {
    return (
        <>
            <div className={classes.navfix}>
                <div className={classes.container}>
                    <div className={classes.selectone}>
                        <select>
                            <option>استان</option>
                        </select>
                        <select>
                            <option>گروه کالایی</option>
                            <option>لاین سرد</option>
                            <option>لاین گرم</option>
                            <option>کافی شاپ</option>
                            <option>آماده سازی</option>
                            <option>خدمات مرتبط</option>
                        </select>
                        <select>
                            <option>وضعیت دستگاه</option>
                            <option>همه موارد</option>
                            <option>نو</option>
                            <option>کارکرده</option>
                        </select>
                    </div>
                    <div className={classes.action}>
                        <button>اعمال فیلتر</button>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default NavbarFixed