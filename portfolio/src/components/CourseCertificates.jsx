import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// Certificate images
import CertificateImg1 from '../assets/certificates/HTML.jpg';
import CertificateImg2 from '../assets/certificates/CSS.jpg';
import CertificateImg3 from '../assets/certificates/JavaScript.jpg';
import CertificateImg4 from '../assets/certificates/Responsive.png';
import CertificateImg5 from '../assets/certificates/Bootstrap.png';
import CertificateImg6 from '../assets/certificates/Figma.png';
import CertificateImg7 from '../assets/certificates/Python.png';
import CertificateImg8 from '../assets/certificates/Python-2.jpg';
import CertificateImg9 from '../assets/certificates/Tkinder.jpg';
import CertificateImg10 from '../assets/certificates/Python Object Oriented Programming.png';
import CertificateImg11 from '../assets/certificates/Dialogflow.jpeg';
import CertificateImg12 from '../assets/certificates/Data Visualization.jpeg';
import CertificateImg13 from '../assets/certificates/Machine-Learning.png';
import CertificateImg14 from '../assets/certificates/Intro to Machine Learning.png';
import CertificateImg15 from '../assets/certificates/React.png';
import CertificateImg16 from '../assets/certificates/RESTful.png';
import CertificateImg17 from '../assets/certificates/Gradio.png';
import CertificateImg18 from '../assets/certificates/Tailwind.jpg';
import CertificateImg19 from '../assets/certificates/NextJS.png';

function CourseCertificates() {

  const [certificates] = useState([
    { title: 'Introduction to HTML Certificate', image: CertificateImg1 },
    { title: 'Introduction to CSS Certificate', image: CertificateImg2 },
    { title: 'Introduction to JavaScript Certificate', image: CertificateImg3 },
    { title: 'Responsive Layout Certificate', image: CertificateImg4 },
    { title: 'Bootstrap Certificate', image: CertificateImg5 },
    { title: 'Figma Certificate', image: CertificateImg6 },
    { title: 'Introduction to Python Certificate', image: CertificateImg7 },
    { title: 'Python Intermediate Certificate', image: CertificateImg8 },
    { title: 'Python Tkinter Certificate', image: CertificateImg9 },
    { title: 'Python Object Oriented Programming Certificate', image: CertificateImg10 },
    { title: 'Dialogflow Certificate', image: CertificateImg11 },
    { title: 'Data Visualization Certificate', image: CertificateImg12 },
    { title: 'Machine Learning Certificate', image: CertificateImg13 },
    { title: 'Into to Machine Learning Certificate', image: CertificateImg14 },
    { title: 'React Certificate', image: CertificateImg15 },
    { title: 'RESTful APIs with Node.js and Express Certificate', image: CertificateImg16 },
    { title: "Gradio Interface Certificate", image: CertificateImg17 },
    { title: "Tailwind CSS Certificate", image: CertificateImg18 },
    { title: "Next.js Certificate", image: CertificateImg19 },
  ]);

  const swiperRef = useRef(null);

  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();
  ;

  return (
    <>

      <style>
        {`
  
      .all-certificates-content .swiper-wrapper { 
      display: flex;
      align-items: stretch;
  }
  
      .all-certificates-content .swiper-slide { 
      display: flex; 
      height: auto; 
  }
  
  
      .all-certificates-content .swiper-pagination-bullets-dynamic {
    top: unset !important;
  } 
  
  
  
  .all-certificates-content .mySwiper{
  padding-bottom: 65px;
  position: relative;
  }
  
  /* Center pagination */
  .all-certificates-content .swiper-pagination {
  bottom: 0 !important;
  // left: 50% !important;
  // transform: translateX(-20%) !important;
  display: flex;
  justify-content: center;
  gap: 10px;
  width: auto !important;
  
}
  
  /* Default bullet */
  .all-certificates-content .mySwiper .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: black !important;
    opacity: 1;
    border-radius: 50%;
  }
  
  /* Active bullet */
  .all-certificates-content .mySwiper .swiper-pagination-bullet-active {
    background: white !important;
    border: 2px solid black !important;
  }
  
  @media (max-width: 1024px) {
      .all-certificates-content .mySwiper{
      padding-bottom: 70px;
      }

      .all-certificates-content .swiper-pagination{
          left: 40% !important;
          transform: translateX(-20%) !important;
      }
  }
  
  `}
      </style>

      <div className="m-10 mx-5 mt-0 sm:mt-12 lg:mx-10 lg:mt-15 h-full flex flex-col justify-center">

        <div className="all-certificates-content relative">

          {certificates.length > 2 && (
            <>
              <div className="absolute -bottom-3 left-0 text-2xl z-30">
                <button onClick={slidePrev} className='bg-white'>
                  <i className="bi bi-caret-left-fill text-black cursor-pointer"></i>
                </button>
              </div>

              <div className="absolute -bottom-3 right-0 text-2xl z-30">
                <button onClick={slideNext} className='bg-white pl-10'>
                  <i className="bi bi-caret-right-fill text-black cursor-pointer"></i>
                </button>
              </div>
            </>
          )}

          <Swiper
            slidesPerView={"auto"}
            spaceBetween={50}
            loop={certificates.length > 3}
            slidesPerGroup={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              1024: {
                slidesPerView: "auto",
                slidesPerGroup: 1,
                centeredSlides: false
              },

              1280: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                centeredSlides: false
              }
            }}
            modules={[Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="mySwiper"
          >

            {certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
                <div className="frame-corner p-4 flex flex-col">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="certificate-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default CourseCertificates