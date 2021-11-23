import { FC } from "react";
import { SlideProps } from "../models/Slide";
import RootSlide from "./RootSlide";

const AleksisMenu: FC<SlideProps> = (props: SlideProps) => {
    return (
        <RootSlide nextSlide={props.nextSlide} visible={props.visible}>
            <h1>Aleksis Menu</h1>

            <p>Cannot load for cross origin reasons... Needs something to do the loading in the backend.</p>
        </RootSlide>
    );
};

export default AleksisMenu;
