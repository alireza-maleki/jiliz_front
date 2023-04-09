import React from 'react';

import classes from "./Product5.module.css";

import Items5 from './Items5'

const Product5 = (props) => {
    return (
        <div className={classes.product}>
            <div className={classes.layout}>

                <div className={classes.link}>
                    <div>
                        <h4>{props.data[1].name}</h4>
                        <p>Exclusive for new customers to the store</p>
                        <button>اطلاعات بیشتر</button>
                    </div>
                </div>


                <div className={classes.data}>
                    <Items5 data={props.data} />
                </div>

            </div>
        </div>
    )
}

export default Product5;