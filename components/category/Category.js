import React from 'react';

import classes from "./Category.module.css";

import CategoryItem from "./CategoryItem";

const Category = (props) => {

    const { products } = props;

    return (
        <>

            {
                products &&

                products.filter((item) => item.id > 15)
                    .map((item) => (
                        <ul key={item.id} className={classes.gift}>
                            <CategoryItem
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

export default Category