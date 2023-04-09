import React, { Fragment } from 'react';
import AutomaticScrollButton from '../automatic scroll/AutomaticScrollButton';

import classes from "./AutomaticSreach.module.css";

const AutomaticSearch = (props) => {
    return (
        <div className={classes.automatic}>
            <AutomaticScrollButton  products={props.products}/>
        </div>
    )
}

export default AutomaticSearch