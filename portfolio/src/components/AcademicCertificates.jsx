import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Certificate images
import CertificateImg1 from '../assets/certificates/Certificate-1.png';
import CertificateImg2 from '../assets/certificates/Certificate-2.png';
import CertificateImg3 from '../assets/certificates/Certificate-3.png';
import CertificateImg4 from '../assets/certificates/Certificate-3(2).png';
import CertificateImg5 from '../assets/certificates/Certificate-4.png';


function AcademicCertificates() {

    const swiperRef = useRef(null);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Update screen width on resize
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const certificates = [
        { title: 'Academic Excellence Award Semester 1', image: CertificateImg1 },
        { title: 'Academic Excellence Award Semester 2', image: CertificateImg2 },
        screenWidth >= 1280
            ? { title: 'Academic Excellence Award Semester 3', image: CertificateImg3 }
            : { title: 'Academic Excellence Award Semester 3 (2)', image: CertificateImg4 },
        { title: 'Academic Excellence Award Semester 4', image: CertificateImg5 }
    ];



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
        justify-content: center;
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
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100% !important;
    
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
  
    }
    
    `}
            </style>

            <div className="m-10 mx-5 mt-15 sm:mt-12 lg:mx-10 lg:mt-15 h-full flex flex-col justify-center mb-20 sm:mb-10">

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
                        spaceBetween={40}
                        loop={certificates.length > 2}

                        slidesPerView={1}
                        slidesPerGroup={1}

                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}

                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                centeredSlides: true
                            },

                            1024: {
                                slidesPerView: 2,
                                centeredSlides: false
                            },

                        }}

                        modules={[Pagination]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="mySwiper"
                    >

                        {certificates.map((certificate, index) => (
                            <SwiperSlide key={index}>
                                <div className="
                                    frame-corner p-4              
                                    max-h-[500px]
                                    xl:max-h-[380px]

                                    w-auto
                                    flex
                                    items-center
                                    justify-center
                                    
                                ">


                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}

                                        className={`
                        
                                            w-full
                                            h-full
                                            object-contain

                                            transition-all duration-300

                                            ${certificate.landscape
                                                ? "rotate-0"
                                                : ""
                                            }
                                        `}
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

export default AcademicCertificates