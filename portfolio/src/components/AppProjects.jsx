import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Green-Combo.png';
import ProjectImg2 from '../assets/projects/Cloth-Care.png';
import GithubLogo from '../assets/logos/github-logo.png';
import YoutubeLogo from '../assets/logos/youtube-logo2.png';

function AppProjects() {
    const [projects] = useState([
        {
            title: 'Green Combo Mobile Application',
            description: "Developed Green Combo, an Android Studio app that lets users select a soil type and a crop type to see the most suitable plant, helping them understand ideal growing conditions.",
            image: ProjectImg1,
            github: 'https://github.com/DC-BSU-RAK/projects-collection-2025-Mohamedshakin02/tree/main/NaN%20Calculator',
            youtube: 'https://youtu.be/zfJ7ccCcAvg?si=RDlFCTa8ZJXaS2Hf',
        },
        {
            title: 'Cloth Care Mobile Application ',
            description: 'Developed Cloth Care, an Android Studio app that provides washing and ironing instructions based on the selected clothing item and fabric type, helping users take proper care of their clothes.',
            image: ProjectImg2,
            github: 'https://github.com/DC-BSU-RAK/projects-collection-2025-Mohamedshakin02/tree/main/Multi%20Page%20App',
            youtube: 'https://youtu.be/xPLIlYXq1oI?si=a3ysVYTk4v7cOuHU',
        },

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

                    {projects.length > 1 && (
                        <>
                            <div className="absolute -bottom-2 left-0 text-2xl z-30 lg:hidden">
                                <button onClick={slidePrev}>
                                    <i className="bi bi-caret-left-fill text-black cursor-pointer"></i>
                                </button>
                            </div>

                            <div className="absolute -bottom-2 right-0 text-2xl z-30 lg:hidden">
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
                            1200: { slidesPerView: 3 },
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
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-lg  text-black"
                                                title='Github Link'
                                            >
                                                <img src={GithubLogo} alt="GitHub Link" className='w-6' />
                                                Code Link
                                            </a>
                                        )}
                                        {project.youtube && (
                                            <a
                                                href={project.youtube}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-lg  text-black"
                                                title='Youtube Link'
                                            >
                                                <img src={YoutubeLogo} alt="Youtube Link" className='w-6' />
                                                Youtube Link
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

export default AppProjects