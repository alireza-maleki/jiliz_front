import React from 'react';

import classes from "./Product4.module.css";

import Items4 from './Items4';

const Product4 = (props) => {
    return (
        <div className={classes.product}>
            <div className={classes.layout}>

                <div className={classes.link}>
                    <div>
                        <h4>{props.data[0].name}</h4>
                        <p>Exclusive for new customers to the store</p>
                        <button>اطلاعات بیشتر</button>
                    </div>
                </div>


                <div className={classes.data}>
                    <Items4 data={props.data} />
                </div>

            </div>
        </div>
    )
}

export default Product4;