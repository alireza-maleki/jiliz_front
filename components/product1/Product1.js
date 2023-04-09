import React from 'react';
import Items1 from './Items1';


import classes from "./Product1.module.css";


const Product1 = (props) => {

  // console.log(props.data)

  return (

    <div className={classes.product} >
      <div className={classes.layout} >

        <div className={classes.link}>
          <div>
            <h4>{props.data[0].name}</h4>
            <p>Get well reviwed itemsfrom the past 180 days</p>
            <button>اطلاعات بیشتر</button>
          </div>
        </div>


        <div className={classes.data}>
          <Items1 data={props.data} />
        </div>

      </div>
    </div>
  )
}



export default Product1;

