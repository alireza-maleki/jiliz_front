import React from 'react';

import classes from "./Items2.module.css";


const Items2 = (props) => {

    const { data } = props;

    const dashData = data
        .map((item) => (
            item.adverts
        ))

    // console.log(dashData[1]);

    return (
        <>
            {dashData[1].filter((ids, index) => index < 4)
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

export default Items2;