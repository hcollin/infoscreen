import React, { FC, useEffect } from "react";
import { SlideProps } from "../models/Slide";
import RootSlide from "./RootSlide";

const CiniaTampere: FC<SlideProps> = (props: SlideProps) => {
    return (
        <RootSlide nextSlide={props.nextSlide} visible={props.visible}>
            <h1>Cinia Tampere</h1>
        </RootSlide>
    );
};

export default CiniaTampere;
