import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg1 from '../assets/projects/Tick-Events.png';
import ProjectImg2 from '../assets/projects/Bath Spa-1.png';
import ProjectImg3 from '../assets/projects/Bath Spa-2.png';
import ProjectImg4 from '../assets/projects/Bath Spa-3.png';
import FigmaLogo from '../assets/logos/figma-logo.png';
import CanvaLogo from '../assets/logos/canva-logo.png';

function UIProjects() {
  const [projects] = useState([
    {
      title: 'Tick Events Application Prototype',
      description: "Developed Tick Events, a Figma prototype app that displays upcoming events, allowing users to filter by location, category, and date, providing an easy-to-use and informative experience.",
      image: ProjectImg1,
      figma: 'https://www.figma.com/proto/8ei59o3Siq5zbrHLCuS2r7/HiFi-Interactive-Prototype?node-id=103-2&t=FAqJabHuBirGSvqx-1&scaling=contain&page-id=0%3A1&starting-point-node-id=103%3A2',
    },
    {
      title: 'Bath Spa University Website Redesign-1',
      description: 'Redesigned Bath Spa University website in Canva, using the original website content, and created layouts with ready-made Canva templates to achieve a clean and user-friendly design.',
      image: ProjectImg2,
      canva: 'https://shakin.my.canva.site/homepage',
    },
    {
      title: 'Bath Spa University Website Redesign-2',
      description: 'Redesigned Bath Spa University webpages in Figma, using the original website content to design layouts with clean structure, organized content, and user-friendly design.',
      image: ProjectImg3,
      figma: 'https://www.figma.com/proto/biXb4Zz1gOMpeuEBFVfvnb/Untitled?node-id=1-3&p=f&t=Yf08lf6RYa4tc9M9-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3',
    },
    {
      title: 'Bath Spa University Website Redesign-3',
      description: 'Redesigned Bath Spa University homepage in Figma as a group project, created the website with content, layout, and design choices based on our research and user needs.',
      image: ProjectImg4,
      figma: 'https://www.figma.com/proto/Gm9GElvypU5OuGcbl42m46/HomePage?node-id=4-2&t=Z9CQSbkpm3nWz9uB-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
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
                    <h3 className="text-2xl font-semibold h-15 lg:h-19">{project.title}</h3>
                  </div>
                  <p className="mt-5 sm:mt-0 lg:mt-4 text-lg font-normal grow">{project.description}</p>
                  <div className="flex justify-between items-center mt-7 pt-6 z-30">
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-lg  text-black"
                        title='Figma Link'
                      >
                        <img src={FigmaLogo} alt="Figma Link" className='w-6' />
                        Figma Link
                      </a>
                    )}
                    {project.canva && (
                      <a
                        href={project.canva}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-lg  text-black"
                        title='Canva Link'
                      >
                        <img src={CanvaLogo} alt="Canva Link" className='w-6' />
                        Canva Link
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

export default UIProjects