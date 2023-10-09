import React from "react";
import styles from "./Slider.module.scss";
import Carousel from 'framer-motion-carousel';


const Slider = ({images}) => (
    <Carousel autoPlay={false} loop={true} interval={2000} children={
        images ? images.map((item) => (
            <div className={styles.image_block}>
                <img src={item} className={styles.image_block__img} alt="Product image"/>
            </div>
        ))
        : null}
    />
)
export default Slider