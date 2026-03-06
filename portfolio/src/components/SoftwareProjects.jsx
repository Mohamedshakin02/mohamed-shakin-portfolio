import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Info-Globe.png';
import ProjectImg2 from '../assets/projects/Student-Manager.png';
import ProjectImg3 from '../assets/projects/Alexa-Jokes.png';
import ProjectImg4 from '../assets/projects/Maths-Quiz.png';
import ProjectImg5 from '../assets/projects/Vending-Machine.png';
import GithubLogo from '../assets/logos/github-logo.png';
import YoutubeLogo from '../assets/logos/youtube-logo2.png';

function SoftwareProjects() {
    const [projects] = useState([
        {
            title: 'Info Globe GUI',
            description: "Developed Info Globe, a Python Tkinter GUI app that fetches country data from the RestCountries API, featuring search, random country display, and region/language filters.",
            image: ProjectImg1,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/Data%20Driven%20Application',
            youtube: 'https://youtu.be/HDZiiggFHlM?si=NS_cXg5EcYnzWaLF',
        },
        {
            title: 'Student Management GUI',
            description: 'Developed a Python program to manage student records from a text file, featuring a menu to view all or individual records, calculate percentages, and extended options to sort, add, delete, and update records.',
            image: ProjectImg2,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/GUI%20Development/Student%20Manager',
            youtube: 'https://youtu.be/deLR6_emePM?si=8L_g7kjnHRp7aTbX',
        },
        {
            title: "Alexa's Jokes GUI",
            description: 'Developed a Python program to display random jokes from a text file, featuring a display of joke question and a button to reveal the answer.',
            image: ProjectImg3,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/GUI%20Development/Alexa%20tell%20me%20a%20Joke',
            youtube: 'https://youtu.be/X_-Lwo5W4dY?si=O9o2z0hj1n6Bhybn',
        },
        {
            title: 'Maths Quiz GUI',
            description: 'Developed an Arithmetic Quiz program in Python with selectable difficulty levels, displaying arithmetic questions, and updating scores based on correct attempts.',
            image: ProjectImg4,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/GUI%20Development/Maths%20Quiz',
            youtube: 'https://youtu.be/oXyzUx9Pzv0?si=CSJh8oQsFdHGZ6aO',
        },
        {
            title: 'Vending Machine Program',
            description: 'Developed a Python vending machine program featuring a menu, item selection by code, automatic stock and balance updates, and suggestions for additional purchases.',
            image: ProjectImg5,
            github: 'https://github.com/Mohamedshakin02/Python-Projects/tree/main/Vending%20Machine',
            youtube: 'https://youtu.be/Y28euhQEwGA?si=OexagkFXixdsNG5N',
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

                    {projects.length > 3 && (
                        <>
                            <div className="absolute -bottom-2 left-0 text-2xl z-30">
                                <button onClick={slidePrev}>
                                    <i className="bi bi-caret-left-fill text-black cursor-pointer"></i>
                                </button>
                            </div>

                            <div className="absolute -bottom-2 right-0 text-2xl z-30">
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

export default SoftwareProjects