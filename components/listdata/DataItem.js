import React from 'react';
import Link from 'next/link';

import classes from "./dataItem.module.css"

const DataItem = (props) => {

    const { id, title, description, image } = props

    const linkAddress = `/kharidkhadamat/${id}`;

    return (

        <li className={`my-3 rounded shadow  ${classes.detail} `}>

            <Link href={linkAddress}>

                <div className="row pt-2 text-center border-bottom">
                    <p>{title}</p>
                </div>

            </Link>

            <div className="p-5 d-flex align-items-center justify-content-around">


                <div>
                    {/* <img src={image} /> */}
                    <p>{description}</p>
                </div>

                <div>
                    <p>{description}</p>
                </div>

            </div>


        </li >

    )


}

export default React.memo(DataItem);