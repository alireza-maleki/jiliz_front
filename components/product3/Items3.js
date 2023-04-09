import React from 'react';

import classes from "./Items3.module.css";


const Items3 = (props) => {

    const { data } = props;

    const dashData = data
        .map((item) => (
            item.adverts
        ))

    // console.log(dashData[2]);

    return (
        <>
            {dashData[2].filter((ids, index) => index < 4)
                .map((item) => (
                    <div className={classes.detail} key={item.id}>

                        <div className={classes.image}>
                            <img src={item.image0} />
                        </div>

                        <div className={classes.summary}>
                            <p>{item.title}</p>
                            <h4>{item.description}</h4>
                        </div>

                    </div>
                ))}
        </>
    )
}

export default Items3;