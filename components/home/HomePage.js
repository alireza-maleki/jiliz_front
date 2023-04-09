import React, { Fragment } from 'react';

import Product1 from '../product1/Product1';
import Product2 from '../product2/Product2';
import Product3 from '../product3/Product3';

import classes from "./HomePage.module.css";
import AutomaticSearch from '../automatic search/AutomaticSearch';
import Product4 from '../product4/Product4';
import Product5 from '../product5/Product5';
import Gifts from '../gifts/Gifts';
import Tools from '../tools & hardware/Tools';
import Energy from '../energy/Energy';
import Accessory from '../accessory/Accessory';
import Cunsumer from '../cunsumer/Cunsumer';
import Category from '../category/Category';


const HomePage = (props) => {
    return (
            <div className={classes.homapage}>
                <Product1 data={props.data} />
                <Product2 data={props.data} />
                <Product3 data={props.data} />
                <Product4 data={props.data} />
                <Product5 data={props.data} />
                <AutomaticSearch products={props.products} data={props.data} />
                <Gifts />
                <Tools />
                <Energy />
                <Accessory />
                <Cunsumer />
                <Category />
            </div>
    )
}

export default HomePage

