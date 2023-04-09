import React from 'react';

import Link from 'next/link';

import classes from "./CunsumerItem.module.css";

const CunsumerItem = (props) => {

    const { key, title, image, desc, price, category, id } = props;

    const linkAddress = `/${id}`

    return (
        <li className={classes.giftitem}>

            <Link href={linkAddress}>
                <div className={classes.title}>
                    <p>{title}</p>
                </div>
            </Link>

            <div className={classes.summary}>
                <div className={classes.image}>
                    <img src={image} />
                </div>
                <div className={classes.items}>
                    <div className={classes.control}>
                        <p> <span>{category}</span>    : category</p>
                        <p> <span>{category}</span>     : category</p>
                        <p> <span>{category}</span>     : category</p>
                    </div>
                    <div className={classes.control}>
                        <p> <span>{category}</span>     : category</p>
                        <p> <span>{category}</span>     : category</p>
                        <p> <span>{category}</span>     : category</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CunsumerItem