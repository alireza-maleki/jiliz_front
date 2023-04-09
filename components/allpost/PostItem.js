import Link from "next/link";

import classes from "./PostItem.module.css";

const PostItem = (props) => {

    const { id, title, body } = props;

    const linkConfig = `/kharidkhadamat/${id}`;

    return (
        <li className={` container my-4 border rounded ${classes.event} `}>

            <Link href={linkConfig}>
                <div className="row py-2 text-center border-bottom border-1 border-secondary">
                    <h5 className={` text-secondary fw-bold ${classes.title} `}>{title}</h5>
                </div>
            </Link>

            <div className="row d-flex align-items-center justify-space-between p-5">

                <div className="col-11">
                    <p className="fs-5">{body}</p>
                </div>

                <div className="col-1 ">
                    <h3 className="fw-bold fs-2 text-primary">{id}</h3>
                </div>
            </div>

        </li>
    )
}

export default PostItem