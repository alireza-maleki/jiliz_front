import React from 'react';

import classes from "./Accessory.module.css";

import AccessoryItem from "./AccessoryItem";

const Accessory = (props) => {

    const { products } = props;

    return (
        <>

            {
                products &&

                products
                    .map((item) => (
                        <ul key={item.id} className={classes.gift}>
                            <AccessoryItem
                                id={item.id}
                                title={item.title}
                                desc={item.description}
                                image={item.image}
                                price={item.price}
                                category={item.category}
                            />
                        </ul>
                    ))

            }

        </>
    )
}

export default Accessory