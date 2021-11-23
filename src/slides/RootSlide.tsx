import { FC, useEffect, useState } from "react";
import { SlideProps } from "../models/Slide";

interface RootSlideProps extends SlideProps {
    children?: React.ReactNode;
}

const RootSlide: FC<RootSlideProps> = (props: RootSlideProps) => {
    const [classes, setClasses] = useState<string>("slide slide-fadeIn");

    useEffect(() => {
        const deleteTimeout = setTimeout(() => {
            setClasses("slide slide-fadeOut");
        }, props.visible || 1000);

        return () => {
            clearTimeout(deleteTimeout);
        };
    }, [props]);

    useEffect(() => {
        if (classes.includes("slide-fadeOut")) {
            const deleteTimeout = setTimeout(() => {
                setClasses("slide slide-hide");
                props.nextSlide();
            }, 950);

            return () => {
                clearTimeout(deleteTimeout);
            };
        }
    }, [classes, props]);

    return <div className={classes}>{props.children}</div>;
};

export default RootSlide;
