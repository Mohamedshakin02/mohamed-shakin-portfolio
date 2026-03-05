import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Pixel-Football.png';
import ProjectImg2 from '../assets/projects/Driving-Test.png';
import ProjectImg3 from '../assets/projects/Third-Level.png';
import ProjectImg4 from '../assets/projects/Highway.png';
import GameLogo from '../assets/logos/game-logo.png';

function GameProjects() {
    const [projects] = useState([
        {
            title: 'Pixel Football 2D Game',
            description: "Developed a 2D pixel art football game in Unity with simple controls and fast-paced, engaging gameplay. Designed a side-view match with 2–5 minute durations, focusing on scoring goals and an engaging gameplay experience.",
            image: ProjectImg1,
            game: 'https://mohamed-shakin.itch.io/pixel-football',
        },
        {
            title: 'Driving Test Bitsy Game',
            description: 'Developed a driving test game in Bitsy with multiple levels, featuring interactive environments with cars, roads, and obstacles, focusing on realistic driving procedures and engaging gameplay.',
            image: ProjectImg2,
            game: 'https://mohamed-shakin.itch.io/driving-test',
        },
        {
            title: 'The Third Level Story Game',
            description: "Developed an interactive story game in Twine adapted from The Third Level by Jack Finney, following Charley’s perspective as he tries to escape a world full of fear and worry. Explore if he succeeds or not.",
            image: ProjectImg3,
            game: 'https://mohamed-shakin.itch.io/the-third-level',
        },
        {
            title: 'Highway 2D Game',
            description: 'Developed HIGHWAY, a driving game where players avoid hitting oncoming cars on a highway. Designed the game with cars gradually increasing the speed to make it more challenging and fun.',
            image: ProjectImg4,
            game: 'https://editor.p5js.org/m.shakin2005/full/m8bfD2RkI',
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
                                        <h3 className="text-2xl font-semibold h-15">{project.title}</h3>
                                    </div>
                                    <p className="mt-5 sm:mt-0 lg:mt-4 text-lg font-normal grow">{project.description}</p>
                                    <div className="flex justify-between items-center mt-7 pt-6 z-30">
                                        {project.game && (
                                            <a
                                                href={project.game}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-lg  text-black"
                                                title='Game Link'
                                            >
                                                <img src={GameLogo} alt="Game Link" className='w-6' />
                                                Game Link
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

export default GameProjects