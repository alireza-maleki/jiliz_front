import Carousel from 'react-bootstrap/Carousel';


import classes from "./Slider.module.css";

function IndividualIntervalsExample() {
    return (

        <Carousel className={classes.carousel}>

            <Carousel.Item className={classes.item} interval={4000}>
                <img
                    className="d-block w-100 h-50"
                    src="/images/kitchen1.jpg"
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item className={classes.item} interval={4000}>
                <img
                    className="d-block w-100 h-50"
                    src="/images/kitchen2.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>

            <Carousel.Item className={classes.item} interval={4000}>
                <img
                    className="d-block w-100 h-50"
                    src="/images/kitchen3.jpg"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;