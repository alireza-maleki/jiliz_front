import React from 'react';

import classes from "./Product2.module.css";

import Items2 from './Items2';

const Product2 = (props) => {
  return (
    <div className={classes.product} >
      <div className={classes.layout}>

        <div className={classes.link}>
          <div>
            <h4>{props.data[1].name}</h4>
            <p>Enjoy discounts with bulk orders</p>
            <button>اطلاعات بیشتر</button>
          </div>
        </div>


        <div className={classes.data}>
          <Items2 data={props.data} />
        </div>

      </div>
    </div>
  )
}

export default Product2;