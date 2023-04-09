import { useRouter } from "next/router"

const dynamicId = () => {

    const router = useRouter();
    
    return (
        <div>
            {router.query.dynamicId}
        </div>
    )
}


export async function getStaticProps(context) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts${context.params.id}`);
    const event = await res.json();

    return {
        props: {
            event
        }
    }

}

export async function getStaticPaths() {

    return {
        paths: [],
        fallback: false
    }

}



export default dynamicId