import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectImg from '../assets/projects/Kaggle.png';
import WebLogo from '../assets/logos/web-logo.png';

function MLProjects() {
    const [projects] = useState([
        {
            title: 'Vehicle Price Prediction Model',
            description: 'Developed a machine learning model using Linear Regression to predict vehicle selling prices based on features such as year, mileage, fuel type, transmission, and ownership. The model included data cleaning, outlier removal, feature encoding, and scaling, and achieved an R² score of around 0.72, showing good prediction accuracy.',
            image: ProjectImg,
            link: 'https://www.kaggle.com/code/mohamedshakin/01-vehicle-price-prediction',
        },
        {
            title: 'Tour & Travels Customer Churn Prediction',
            description: "Developed a machine learning model using Logistic Regression to predict customer churn for a tour and travel company based on features such as age, income class, services opted, frequent flyer status, and social media linkage. The model included class imbalance handling, feature encoding, and scaling, and achieved an accuracy of 87.2%, showing strong predictive performance.",
            image: ProjectImg,
            link: 'https://www.kaggle.com/code/mohamedshakin/02-tour-travels-customer-churn-prediction',
        },
        {
            title: 'AI & Data Science Salary Prediction Model',
            description: "Developed a machine learning model using Linear Regression to predict AI and Data Science salaries based on experience, skills, tools, country, education, work mode, and company size. The model included data cleaning, currency conversion, feature encoding, scaling, and evaluation, achieving about 90% accuracy. A Gradio interface integrated to allow users to enter details and receive predicted salaries.",
            image: ProjectImg,
            link: 'https://www.kaggle.com/code/mohamedshakin/ai-data-science-job-salaries-prediction',
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

                            <div className="absolute -bottom-2 right-0 text-2xl z-30 ">
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
                                        <h3 className="text-2xl font-semibold h-15 lg:h-20">{project.title}</h3>
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

export default MLProjects