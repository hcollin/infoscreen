import { FC } from "react";
import { SlideProps } from "../models/Slide";
import RootSlide from "./RootSlide";

const UrlSlide: FC<SlideProps> = (props: SlideProps) => {
    console.log("URL SLIDE:", props.config);
    const url = props.config?.url || "";

    if(url === "") return <ErrorSlide {...props}></ErrorSlide>;
    return (
        <RootSlide nextSlide={props.nextSlide} visible={props.visible}>
            <div style={{width: "100%", height: "100vh", border: "solid 1px pink"}}>
                <iframe src={url} style={{width: "100%", height: "100vh"}}/>
            </div>
        </RootSlide>
    );
};


const ErrorSlide: FC<SlideProps> = (props: SlideProps) => {

    return (
        <RootSlide nextSlide={props.nextSlide} visible={props.visible}>
            <h1>ERROR WHILE LOADING URL SLIDE {props.config}</h1>
        </RootSlide>

            );
}

export default UrlSlide;
