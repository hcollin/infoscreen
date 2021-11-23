import { FC } from "react";
import { SlideProps } from "../models/Slide";
import RootSlide from "./RootSlide";

import "./imageSlide.css";


const ImageSlide: FC<SlideProps> = (props: SlideProps) => {
    
    const imgName = props.config?.picUrl || "";


    return (
        <RootSlide nextSlide={props.nextSlide} visible={props.visible}>
            <img src={imgName} alt={imgName} className="slide-fullimage"/>
        </RootSlide>
    );
};

export default ImageSlide;
