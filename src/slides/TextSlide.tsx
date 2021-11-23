import { FC } from "react";
import { SlideProps } from "../models/Slide";
import RootSlide from "./RootSlide";

import "./textSlide.css";

const TextSlide: FC<SlideProps> = (props: SlideProps) => {
    const title = props.config?.title || "There is no title!";
    const text = props.config?.text || "Spoon is a lie!";

    return (
        <RootSlide nextSlide={props.nextSlide} visible={props.visible}>
            <div className="text-slide">
                <h1>{title}</h1>

                <p>{text}</p>
            </div>
        </RootSlide>
    );
};

export default TextSlide;
