import React from 'react'

function ContactSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-8 min-h-[700px] custom-1580-grid">
      <div className="col-span-1 sm:col-span-3 lg:col-span-2 custom-1580-colsspan-2 bg-none text-black sm:text-white sm:bg-black flex flex-col h-20 sm:h-[700px] order-1">

        <div className="flex flex-col h-auto sm:h-full">

          <div className='bg-black'>
            <h1 className="text-white text-4xl m-5 mt-10 md:mt-10 lg:m-10 lg:mb-7">
              Contact Me
            </h1>

            <div className="flex mx-5 lg:mx-10 mb-10 sm:mb-5">
              <hr className="w-[80%] h-1 bg-white" />
              <hr className="w-[10%] h-1 bg-black border-0" />
              <hr className="w-[10%] h-1 bg-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-5 lg:col-span-6 custom-1580-colsspan-10 flex flex-col order-2 animate-fade">
        <div className="m-10 mx-5 mt-0 sm:mt-5 lg:mx-10">
          <p className="text-3xl lg:text-4xl font-semibold mt-4">Let’s get in touch! Here’s how you can connect with me.</p>

          <div className='mt-12 p-4 pl-0'>
            <a href="mailto:m.shakin2005@gmail.com"
              target="_blank"
              className="text-2xl sm:text-3xl font-normal flex items-center underline-offset-8 hover:underline transition-all duration-300"
              title='Email ID'
              style={{ wordBreak: "break-word" }}>

              <i className="bi bi-envelope-fill mr-4 md:mr-5 text-3xl sm:text-4xl"></i>
              m.shakin2005@gmail.com
            </a>
          </div>

          <div className='p-4 pl-0'>
            <a href="tel:+971504385645"
              target="_blank"
              className="text-2xl sm:text-3xl font-normal flex items-center underline-offset-8 hover:underline transition-all duration-300"
              title='Mobile Number'
              style={{ wordBreak: "break-word" }}>

              <i className="bi bi-telephone-fill mr-4 md:mr-5 text-3xl sm:text-4xl"></i>
              +971504385645
            </a>
          </div>

          <div className='p-4 pl-0'>
            <a href="https://www.linkedin.com/in/mohamed-shakin/"
              target="_blank"
              className="text-2xl sm:text-3xl font-normal flex items-center underline-offset-8 hover:underline transition-all duration-300"
              title='LinkedIn Profile'
              style={{ wordBreak: "break-word" }}>

              <i className="bi bi-linkedin mr-4 md:mr-5 text-3xl sm:text-4xl"></i>
              https://www.linkedin.com/in/mohamed-shakin/
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection