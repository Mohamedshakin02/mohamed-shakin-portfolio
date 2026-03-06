import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Garden-Chatbot.png';
import ProjectImg2 from '../assets/projects/Agriculture-Data.png';
import ProjectImg3 from '../assets/projects/p5js-works.png';
import WebLogo from '../assets/logos/web-logo.png';

function OtherProjects() {
    const [projects] = useState([
        {
            title: 'Garden Chatbot',
            description: 'Developed Garden Chatbot using Google Dialogflow to provide personalized plant recommendations based on the user’s environment, offering simple and engaging gardening guidance.',
            image: ProjectImg1,
            link: 'https://garden-chatbot-project.vercel.app/',
        },
        {
            title: 'Agriculture Data Visualization',
            description: "Agriculture Data Visualization is an interactive project created using Flourish, showing how agriculture has changed over time and across regions, allowing users to explore the data and understand regional and global trends.",
            image: ProjectImg2,
            link: 'https://public.flourish.studio/story/3056211/',
        },
        {
            title: 'p5.js Works',
            description: "Developed multiple p5.js projects that featured dynamic digital art with interactive and unique experiences. Explored coding techniques to produce engaging and creative digital artwork.",
            image: ProjectImg3,
            link: 'https://editor.p5js.org/m.shakin2005/sketches',
        }

    ]);

    const swiperRef = useRef(null);

    const slidePrev = () => swiperRef.current?.slidePrev();
    const slideNext = () => swiperRef.current?.slideNext();
    ;

    return (
        <>

            <style>
                {`
    
        .all-projects-content .swiper-wrapper { 
        display: flex;
        align-items: stretch;
    }
    
        .all-projects-content .swiper-slide { 
        display: flex; 
        height: auto; 
    }
    
    
        .all-projects-content .swiper-pagination-bullets-dynamic {
      top: unset !important;
    } 
    
    
    
    //     .all-projects-content .mySwiper .swiper-pagination {
    //     top: unset !important;
    // }
    
    
    .all-projects-content .mySwiper{
    padding-bottom: 65px;
    }
    
    /* Center pagination */
    .all-projects-content .mySwiper .swiper-pagination {
      bottom: 0 !important;
      display: flex;
      justify-content: center;
      gap: 10px;
    }
    
    /* Default bullet */
    .all-projects-content .mySwiper .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: black !important;
      opacity: 1;
      border-radius: 50%;
    }
    
    /* Active bullet */
    .all-projects-content .mySwiper .swiper-pagination-bullet-active {
      background: white !important;
      border: 2px solid black !important;
    }
    
    @media (max-width: 1024px) {
        .all-projects-content .mySwiper{
        padding-bottom: 70px;
        }
    }
    
    `}
            </style>

            <div className="m-10 mx-5 mt-15 sm:mt-12 lg:mx-10 lg:mt-15">

                <div className="all-projects-content relative">

                    {projects.length > 2 && (
                        <>
                            <div className="absolute -bottom-2 left-0 text-2xl z-30 xl:hidden">
                                <button onClick={slidePrev}>
                                    <i className="bi bi-caret-left-fill text-black cursor-pointer"></i>
                                </button>
                            </div>

                            <div className="absolute -bottom-2 right-0 text-2xl z-30 xl:hidden">
                                <button onClick={slideNext}>
                                    <i className="bi bi-caret-right-fill text-black cursor-pointer"></i>
                                </button>
                            </div>
                        </>
                    )}

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={projects.length > 3}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                        modules={[Pagination]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="frame-corner p-4 flex flex-col">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="mb-4 w-full"
                                    />
                                    <div>
                                        <h3 className="text-2xl font-semibold h-15 lg:h-17">{project.title}</h3>
                                    </div>
                                    <p className="mt-5 sm:mt-0 lg:mt-4 text-lg font-normal grow">{project.description}</p>
                                    <div className="flex justify-between items-center mt-7 pt-6 z-30">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-lg  text-black"
                                                title='Live Link'
                                            >
                                                <img src={WebLogo} alt="Live Link" className='w-6' />
                                                Live Link
                                            </a>
                                        )}

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );

}

export default OtherProjects