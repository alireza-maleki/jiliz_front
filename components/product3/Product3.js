import React from 'react';

import classes from "./Product3.module.css";

import Items3 from './Items3';

const Product3 = (props) => {
  return (
    <div className={classes.product}>
      <div className={classes.layout}>

        <div className={classes.link}>
          <div>
            <h4>{props.data[2].name}</h4>
            <p>Exclusive for new customers to the store</p>
            <button>اطلاعات بیشتر</button>
          </div>
        </div>


        <div className={classes.data}>
          <Items3 data={props.data} />
        </div>

      </div>
    </div>
  )
}

export default Product3