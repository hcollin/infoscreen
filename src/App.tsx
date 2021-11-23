import { FC, useState } from "react";
import { SlideProps } from "./models/Slide";

import ImageSlide from "./slides/ImageSlide";
import TextSlide from "./slides/TextSlide";
// import CiniaTampere from "./slides/CiniaTampere";
// import UrlSlide from "./slides/UrlSlide";

interface SlideConfig {
    slide: FC<SlideProps>;
    visible?: number;
    config?: Record<string, string>;
}

//const slides: FC<SlideProps>[] = [AleksisMenu, CiniaTampere];
const slides: SlideConfig[] = [
    {
        slide: ImageSlide,
        visible: 10000,
        config: {
            picUrl: "TulevaisuusOnTehtava.jpg",
        },
    },
    {
        slide: TextSlide,
        visible: 10000,
        config: {
            title: "Tämä on testi!",
            text: "Mahtaako tämä toimia?",
        },
    },
    // {
    //     slide: TextSlide,
    //     visible: 5000,
    // },
    // {
    //   slide: UrlSlide,
    //   visible: 15000,
    //   config: {
    //     url: "https://ravintola-aleksis.fi/"
    //   }
    // }
];

function App() {
    const [slideId, setSlideId] = useState<number>(0);

    function nextSlide() {
        // if (slides.length <= 1) return;

        const nextSlideId = slideId + 1;
        if (nextSlideId >= slides.length) {
            setSlideId(0);
        } else {
            setSlideId(nextSlideId);
        }
    }

    const conf = slides[slideId];
    const Slide = conf.slide;
    return (
        <div className="App">
            <Slide nextSlide={nextSlide} visible={conf.visible || 1000} config={conf.config || {}} />

            <div className="slide-info">
                {slideId + 1} / {slides.length} {Math.round((conf.visible || 1000) / 1000)}s
            </div>
        </div>
    );
}

export default App;
