import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Sports Note.png';
import ProjectImg2 from '../assets/projects/CML.png';
import ProjectImg3 from '../assets/projects/G-Shock.png';
import ProjectImg4 from '../assets/projects/Zoo-Website.png';
import ProjectImg5 from '../assets/projects/Choco.png';
import ProjectImg6 from '../assets/projects/Soundboard.png';
import ProjectImg7 from '../assets/projects/Petrol.png';
import GithubLogo from '../assets/logos/github-logo.png';
import WebLogo from '../assets/logos/web-logo.png';

function WebProjects() {
    const [projects] = useState([
        {
            title: 'Sports Note Web Application',
            description: 'Developed a full-stack sports note web application using React.js with a Node.js and MongoDB backend, allowing users to store, manage, and organize their sports-related data through a clean and responsive interface.',
            image: ProjectImg1,
            github: 'https://github.com/Mohamedshakin02/sports-note.git',
            link: 'https://sportsnote.vercel.app/',
        },
        {
            title: 'CML Company Website',
            description: 'Developed a responsive website for CML Company as part of a university assessment, highlighting musical events, consulting, and products. My role included responsive development, UI design, and contributing ideas.',
            image: ProjectImg2,
            github: 'https://github.com/Zeko54/CML.git',
            link: 'https://cml-henna.vercel.app/',
        },
        {
            title: 'G-Shock Responsive Website',
            description: 'Developed a responsive G-Shock website using React.js, integrated with a Node.js/MongoDB backend for user login, featuring watch details and fully responsive design across desktop, tablet, and mobile devices.',
            image: ProjectImg3,
            github: 'https://github.com/Mohamedshakin02/G-SHOCK-Watch.git',
            link: 'https://g-shock.vercel.app/',
        },
        {
            title: 'The Zoo Wildlife Park Website',
            description: 'Recreated the non-responsive Zoo Wildlife Park website using HTML, CSS, and JavaScript, designed some sections to improve visual layout and user engagement, while preserving the original content and core functionality.',
            image: ProjectImg4,
            github: 'https://github.com/Mohamedshakin1/The-Zoo-Wildlife-Park',
            link: 'https://mohamedshakin1.github.io/The-Zoo-Wildlife-Park/',
        },
        {
            title: 'Chocolate Box Website',
            description: 'Developed a responsive chocolate box website featuring a custom chocolate box builder, product overview, and user signup page, optimized for desktop and mobile.',
            image: ProjectImg5,
            github: 'https://github.com/Mohamedshakin02/Chocolate-Company-Website',
            link: 'https://chocolate-company-website.vercel.app/',
        },
        {
            title: 'Interactive Soundboard',
            description: 'Developed an interactive audio soundboard web application using HTML, CSS, and JavaScript, featuring a grid of audio samples with clickable playback and a text-to-speech feature.',
            image: ProjectImg6,
            github: 'https://github.com/Mohamedshakin02/Javascript-Projects/tree/main/Soundboard',
            link: 'https://soundboard-activity.vercel.app/',
        },
        {
            title: 'Petrol Calculator',
            description: 'Developed a simple petrol calculator web application using HTML, CSS, and JavaScript, featuring inputs for petrol cost per liter and liters purchased, with a calculation button to display the total cost.',
            image: ProjectImg7,
            github: 'https://github.com/Mohamedshakin02/Javascript-Projects/tree/main/Petrol%20Calculator',
            link: 'https://petrol-calculator-activity.vercel.app/',
        }

    ])

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

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        loop={true}
                        pagination={{ clickable: true, dynamicBullets: true, }}
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
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-lg  text-black"
                                                title='Live Link'
                                            >
                                                <img src={WebLogo} alt="Website Link" className='w-6' />
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

export default WebProjects