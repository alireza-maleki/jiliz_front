
import React from 'react';

import classes from "./TopScroll.module.css";

import Slider from "../slider/Slider";
import Content from './Content';

const TopScroll = () => {
    return (
        <div className={classes.topscroll}>
            <div className={classes.right}>
                <Slider />
            </div>
            <div className={classes.left}>
                <Content />
            </div>
        </div>
    )
}

export default TopScroll;