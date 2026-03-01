import React from 'react'

function Education() {
  return (
    <section className="m-10 mx-5 mt-10 sm:mt-12 lg:mx-10 flex flex-col gap-14">
      <div className='flex flex-col md:flex-row justify-between frame-corner p-5 gap-y-4'>
        <div className='flex flex-col justify-between gap-y-3 w-auto md:w-2/5'>
          <div className='text-xl lg:text-3xl font-medium text-center md:text-left'>
            <p>School Education</p>
          </div>
          <div className='text-sm lg:text-base text-center md:text-left'>
            <p>2009-2021</p>
          </div>
        </div>

        <div className='flex flex-row md:flex-col justify-between items-center md:items-start gap-y-2 w-auto md:w-2/5'>
          <div className='year text-sm md:text-lg lg:text-2xl'>
            <p>The Central School, Dubai</p>
          </div>

          <div className='text-sm lg:text-base text-right'>
            <p>CBSE Board</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between frame-corner p-5 gap-y-4'>
        <div className='flex flex-col justify-between gap-y-3 w-auto md:w-2/5'>
          <div className='text-xl lg:text-3xl font-medium text-center md:text-left'>
            <p>High School, Science</p>
          </div>
          <div className='text-sm lg:text-base text-center md:text-left'>
            <p>2021-2023 </p>
          </div>
        </div>

        <div className='flex flex-row md:flex-col justify-between items-center md:items-start gap-y-2 w-auto md:w-2/5'>
          <div className='year text-sm md:text-lg lg:text-2xl'>
            <p>The Central School, Dubai</p>
          </div>

          <div className='text-sm lg:text-base text-right'>
            <p>CBSE Board</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between frame-corner p-5 gap-y-4'>
        <div className='flex flex-col justify-between gap-y-3 w-auto md:w-2/5'>
          <div className='text-xl lg:text-3xl font-medium text-center md:text-left'>
            <p>BSc (Hons) Creative Computing</p>
          </div>
          <div className='text-sm lg:text-base text-center md:text-left'>
            <p>2023-present </p>
          </div>
        </div>

        <div className='flex flex-row md:flex-col justify-between items-center md:items-start gap-y-2 w-auto md:w-2/5'>
          <div className='year text-sm md:text-lg lg:text-2xl'>
            <p>Bath Spa Univeristy, RAK</p>
          </div>

          <div className='text-sm lg:text-base text-right'>
            <p>UK Curriculum </p>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default Education