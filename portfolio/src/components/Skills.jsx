import React from 'react'
import WebLogo from '../assets/logos/web-logo.png';
import SoftwareLogo from '../assets/logos/software-logo.png';
import DesignLogo from '../assets/logos/design-logo.png';
import GameLogo from '../assets/logos/game-logo.png';

function Skills() {
    return (
        <section className="m-10 mx-5 mt-10 sm:mt-12 lg:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div className='frame-corner p-7 gap-y-4 h-full'>
                <div className='cols-span-1 h-full flex flex-col justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img src={WebLogo} alt="Web development" className='w-12 h-12 object-contain' />
                        </div>
                        <div>
                            <p className='text-3xl font-semibold'>Web Development</p>
                        </div>
                    </div>
                    <div className='mt-5 flex flex-col justify-between gap-y-8 h-full'>
                        <div>
                            <p className='text-xl font-normal'>Building responsive and modern websites with clean layouts and smooth functionality. From simple projects to full-featured sites, delivering engaging and user-friendly web experiences.</p>
                        </div>
                        <div className='h-2/6'>
                            <p className='m-0 text-lg'>Tools: HTML, CSS, JavaScript, Sass, Bootstrap, React, Node.js, Express.js, MongoDB</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='frame-corner p-7 gap-y-4 h-full'>
                <div className='cols-span-1 h-full flex flex-col justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img src={SoftwareLogo} alt="Software Development" className='w-12 h-12 object-contain' />
                        </div>
                        <div>
                            <p className='text-3xl font-semibold'>Software Development</p>
                        </div>
                    </div>
                    <div className='mt-5 flex flex-col justify-between gap-y-8 h-full'>
                        <div>
                            <p className='text-xl font-normal'>Developing practical and efficient software solutions, from API-based programs to Android applications, with a focus on functionality and usability.</p>
                        </div>
                        <div className='h-2/6'>
                            <p className='text-lg'>Tools: Python, Tkinter, JavaScript, Android Studio</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='frame-corner p-7 gap-y-4 h-full'>
                <div className='cols-span-1 h-full flex flex-col justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img src={GameLogo} alt="Game Development" className='w-12 h-12 object-contain' />
                        </div>
                        <div>
                            <p className='text-3xl font-semibold'>Game Development</p>
                        </div>
                    </div>
                    <div className='mt-5 flex flex-col justify-between h-full'>
                        <div>
                            <p className='text-xl font-normal'>Designing fun and interactive games that combine creativity with engaging mechanics, suitable for storytelling and entertainment.</p>
                        </div>

                        <div className='mt-7'>
                            <p className='text-lg'>Tools: Unity, Twine, Bitsy, p5.js</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='frame-corner p-7 gap-y-4 h-full'>
                <div className='cols-span-1 h-full flex flex-col justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <div>
                            <img src={DesignLogo} alt="UI/UX Design" className='w-12 h-12 object-contain' />
                        </div>
                        <div>
                            <p className='text-3xl font-semibold'>UI/UX Design</p>
                        </div>
                    </div>
                    <div className='mt-5 flex flex-col justify-between h-full'>
                        <div>
                            <p className='text-xl font-normal'>Creating intuitive and user-friendly interfaces through wireframes and prototypes, ensuring designs balance aesthetics and functionality.</p>
                        </div>

                        <div className='mt-7'>
                            <p className='m-0 text-lg'>Tools: Figma, Canva</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills