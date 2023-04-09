import React from 'react';

import classes from "./Tools.module.css";

import ToolsItem from './ToolsItem';

const Tools = (props) => {

    const { products } = props

    return (
        <>

            {
                products &&

                products
                    .map((item) => (
                        <ul key={item.id} className={classes.gift}>
                            <ToolsItem
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

export default Tools;