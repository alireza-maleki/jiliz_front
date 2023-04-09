import { useRouter } from "next/router"

const indexId = () => {

    const router = useRouter();


    return (
        <div className="container text-center fw-bold d-flex align-items-center justify-content-center">
            {router.query.ids}
        </div>
    )
}

export default indexId