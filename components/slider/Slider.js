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
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item className={classes.item} interval={4000}>
                <img
                    className="d-block w-100 h-50"
                    src="/images/kitchen2.jpg"
                    alt="Second slide"
                />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item className={classes.item} interval={4000}>
                <img
                    className="d-block w-100 h-50"
                    src="/images/kitchen3.jpg"
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;