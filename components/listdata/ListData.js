import React from "react";
import DataItem from "./DataItem";


const ListData = ({ events }) => {

    // console.log(events)

    return (

        <ul className="container my-5 list-unstyled">

            {
                events.map(event =>
                    <DataItem
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        description={event.description}
                        image={event.image0}
                    />)
            }

        </ul>

    )

}

export default React.memo(ListData);