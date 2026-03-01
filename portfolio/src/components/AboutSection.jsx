import React, { useState, useEffect, useRef } from 'react'
import { Pagination, Mousewheel, FreeMode } from "swiper/modules";
import About from './About'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Education from './Education';

function AboutSection() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showControls, setShowControls] = useState(false);

    const swiperRef = useRef(null);

    const slidePrev = () => swiperRef.current?.slidePrev();
    const slideNext = () => swiperRef.current?.slideNext();

    const [activeIndex, setActiveIndex] = useState(0);

    const Components = [<About />, <Education />];

    const Items = ["Me", "Education", "Skills"];

    /* Resize */
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
    const updateControls = () => {

        const swiper = swiperRef.current;
        if (!swiper || !swiper.slides) return;

        if (screenWidth >= 640) {
            setShowControls(swiper.slides.length > swiper.params.slidesPerView);
        }
        else {

            const totalWidth = Array.from(swiper.slides).reduce(
                (sum, slide) =>
                    sum + slide.offsetWidth + (swiper.params.spaceBetween || 0) - 6,
                0
            );

            setShowControls(totalWidth > swiper.width);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(updateControls, 100);
        return () => clearTimeout(timeout);
    }, [screenWidth]);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-8 sm:min-h-[700px] mt-10 sm:mt-0 custom-1580-grid">

            <div 
                key={activeIndex}
                className="col-span-1 sm:col-span-5 lg:col-span-6 custom-1580-colsspan-10 flex flex-col order-2 sm:order-1 animate-fade">
                {Components[activeIndex]}
            </div>

            <div className="col-span-1 sm:col-span-3 lg:col-span-2 custom-1580-colsspan-2 bg-none text-black sm:text-white sm:bg-black flex flex-col sm:min-h-[700px] order-1 sm:order-2">

                <div className="flex flex-col h-auto sm:h-full">

                    <div className='bg-black'>
                        <h1 className="text-white text-4xl m-5 mt-10 md:mt-10 lg:m-10 lg:mb-7">
                            About
                        </h1>

                        <div className="flex mx-5 lg:mx-10 mb-10 sm:mb-5">
                            <hr className="w-[80%] h-1 bg-white" />
                            <hr className="w-[10%] h-1 bg-black border-0" />
                            <hr className="w-[10%] h-1 bg-white" />
                        </div>
                    </div>




                    <div className="relative mt-10 sm:mt-5 mx-5 sm:mx-0">


                        {/* Mobile Horizontal Arrows */}
                        {showControls && screenWidth < 640 && (
                            <div className="absolute bottom-0 left-0 w-full flex justify-between text-white text-2xl z-30">

                                <button onClick={slidePrev}>
                                    <i className="bi bi-caret-left-fill text-black sm:text-white"></i>
                                </button>

                                <button onClick={slideNext}>
                                    <i className="bi bi-caret-right-fill text-black sm:text-white"></i>
                                </button>

                            </div>
                        )}

                        {/* Swiper */}
                        <Swiper
                            key={screenWidth}

                            direction={screenWidth >= 640 ? "vertical" : "horizontal"}

                            slidesPerView={screenWidth >= 640 ? 5 : "auto"}

                            spaceBetween={screenWidth >= 640 ? 0 : 15}

                            mousewheel={screenWidth >= 640}

                            freeMode={{ enabled: true }}

                            pagination={
                                screenWidth < 640
                                    ? {
                                        clickable: true,
                                        dynamicBullets: true
                                    }
                                    : false
                            }

                            modules={[Mousewheel, Pagination, FreeMode]}

                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                setTimeout(updateControls, 100);
                            }}

                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.activeIndex);
                            }}

                            className="w-full h-[130px] sm:h-auto relative"
                        >

                            {Items.map((item, index) => (
                                <SwiperSlide key={index} className="h-auto! w-auto! mr-0!">

                                    <button
                                        onClick={() => {
                                            setActiveIndex(index);
                                            swiperRef.current?.slideTo(index);
                                        }}
                                        className={`
                                            relative
                                            text-3xl
                                            text-left
                                            p-5 md:pl-5 lg:pl-10
                                            whitespace-nowrap
                                            transition-all duration-300
                                            w-full
                                            ${activeIndex === index
                                                ? "bg-black text-white sm:bg-white sm:text-black"
                                                : "bg-white text-black sm:bg-black sm:text-white"
                                            }
                                            ${index !== 0 ? "border-l-2 sm:border-l-0" : ""}
                                        `}>

                                        {item}

                                        {/* Animated Indicator */}
                                        <span
                                            className={`
                                                absolute left-0 bottom-0 h-1 bg-black sm:bg-white
                                                transition-all duration-300
                                                ${activeIndex === index ? "w-full" : "w-0"}
                                            `}
                                        ></span>
                                    </button>

                                    <hr className="border-white border hidden sm:block sm:mx-5 lg:mx-10" />



                                </SwiperSlide>
                            ))}

                        </Swiper>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default AboutSection