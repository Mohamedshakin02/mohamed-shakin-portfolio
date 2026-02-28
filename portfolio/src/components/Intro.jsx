import React from 'react';
import ShakinImg from '../assets/Shakin.jpg';
import GithubLogo from '../assets/logos/github-logo.png';
import ItchLogo from '../assets/logos/itch-logo.png';
import LinkedInLogo from '../assets/logos/linkedin-logo.png';
import YoutubeLogo from '../assets/logos/youtube-logo.png';
import { Link, NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Navbar from './Navbar';

function Intro() {
  return (
  
    <section className="grid grid-cols-1 sm:grid-cols-8 min-h-[700px] custom-1580-grid">
      <div className="relative col-span-1 sm:col-span-3 lg:col-span-2 custom-1580-colsspan-2 bg-black flex flex-col h-[700px] sm:h-auto">

        {/* Mobile Navbar Positioned Over Image */}
        <div className="absolute top-3 right-1 z-50 sm:hidden">
          <Navbar />
        </div>

        <div className='w-full h-3/5 bg-no-repeat bg-cover bg-center bg-position-[center_40%] bg-size-[150%] lg:bg-position-[center_40%] 2xl:lg:bg-size-[150%]' style={{ backgroundImage: `url(${ShakinImg})` }}></div>
        <div className='w-full text-white p-5'>
          <div>
            <p className='text-2xl'>Hello, I am</p>
            <p className='text-[2.5rem] mt-2 font-medium'>Mohamed Shakin</p>
          </div>

          <div className='mt-2 text-[1.2rem]'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={2000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>Web Development</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Software Development</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Game Development</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>UI/UX Design</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Web Development</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Software Development</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>Game Development</div>
              </SwiperSlide>
              <SwiperSlide>
                <div>UI/UX Design</div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='grid grid-cols-4 gap-5 mt-8'>

            <div className='bg-white flex items-center justify-center aspect-square'>
              <a href="https://github.com/Mohamedshakin02" target="_blank" className='flex justify-center items-center'>
                <img src={GithubLogo} className='w-3/4 aspect-square' />
              </a>
            </div>

            <div className='bg-white flex items-center justify-center aspect-square'>
              <a href="https://mohamed-shakin.itch.io/" target="_blank" className='flex justify-center items-center'>
                <img src={ItchLogo} className='w-3/4 aspect-square' />
              </a>
            </div>

            <div className='bg-white flex items-center justify-center aspect-square'>
              <a href="https://www.linkedin.com/in/mohamed-shakin/" target="_blank" className='flex justify-center items-center'>
                <img src={LinkedInLogo} className='w-3/4 aspect-square' />
              </a>
            </div>

            <div className='bg-white flex items-center justify-center aspect-square'>
              <a href="https://www.youtube.com/@mohamedshakin5397" target="_blank" className='flex justify-center items-center'>
                <img src={YoutubeLogo} className='w-3/4 aspect-square' />
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-5 lg:col-span-6 custom-1580-colsspan-10 sm:h-full flex flex-col h-[630px] sm:h-auto">
        <div className="hidden sm:block">
          <Navbar />
        </div>

        <div className='flex flex-col justify-between flex-1'>
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mt-10 mx-5 lg:mx-10">
              Welcome to My Portfolio,
            </h1>
            <p className="text-3xl lg:text-4xl mt-6 mx-5 lg:mx-10 sm:pb-10 lg:pb-0">
              Explore my projects, skills, and passion
              for building creative digital experiences.
            </p>
          </div>

          <div>
            <ul className='flex flex-col gap-5 mb-5'>
              <li>
                <Link to="/about" className="w-full flex items-center justify-between text-3xl lg:text-4xl px-5 lg:px-10 text-black">About <span><i className="bi bi-arrow-up-right mx-auto"></i></span></Link>
              </li>
              <hr className='border-2 mx-5 lg:mx-10' />
              <li>
                <Link to="/projects" className="w-full flex items-center justify-between text-3xl lg:text-4xl px-5 lg:px-10 text-black">Projects <span><i className="bi bi-arrow-up-right mx-1"></i></span></Link>
              </li>
              <hr className='border-2 mx-5 lg:mx-10' />
              <li>
                <Link to="/certificates" className="w-full flex items-center justify-between text-3xl lg:text-4xl px-5 lg:px-10 text-black">Certificates <span><i className="bi bi-arrow-up-right mx-1"></i></span></Link>
              </li>
              <hr className='border-2 mx-5 lg:mx-10' />
              <li>
                <Link to="/contact" className="w-full flex items-center justify-between text-3xl lg:text-4xl px-5 lg:px-10 text-black">Contact <span><i className="bi bi-arrow-up-right mx-1"></i></span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro