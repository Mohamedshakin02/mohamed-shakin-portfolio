import React from 'react'

function About() {
    return (
        <>
            <section id="about" className="m-10 mx-5 mt-0 sm:mt-10  lg:mx-10 flex flex-col gap-14">
                <div>
                    <p className="text-2xl lg:text-2xl font-normal text-justify">
                        I'm Mohamed Shakin, passionate about building creative and practical digital solutions that solve real-world problems. With a background in Creative Computing, I have developed a strong foundation in web development, software development, game development, and UI/UX design. I create responsive and modern websites using technologies such as HTML, CSS, JavaScript, Sass, Bootstrap, Tailwind, and React, along with backend tools like Node.js, Express.js, and MongoDB.
                        <br /><br />
                        I enjoy applying my skills to create meaningful user experiences. Whether it's developing a website, building a software application, designing an interactive game, or crafting intuitive interfaces, I approach every project with a problem-solving mindset and attention to detail.
                        <br /><br />
                        I'm always looking for opportunities to grow and collaborate on projects that challenge me, learn new skills, and make a real impact through technology.
                    </p>
                </div>

                <div className='flex flex-col gap-y-12'>
                    <div className='flex justify-between'>


                    <div className="flex flex-col gap-3 w-2/5 lg:w-1/4 ">
                        <p className="text-lg lg:text-xl text-left">Nationality:</p>
                        <p className="text-4xl lg:text-5xl font-medium">Indian</p>
                    </div>


                     <div className="flex flex-col gap-3 w-2/5 lg:w-1/4">
                        <p className="text-lg lg:text-xl text-left">Age:</p>
                        <p className="text-4xl lg:text-5xl font-medium">20</p>
                    </div>
                </div>

                <div className='flex justify-between mb'>

                    <div className="flex flex-col gap-3 w-2/5 lg:w-1/4">
                        <p className="text-lg lg:text-xl text-left">Language:</p>
                        <p className="text-4xl lg:text-5xl font-medium">
                            English, <br />Tamil
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 w-2/5 lg:w-1/4">
                        <p className="text-lg lg:text-xl text-left">Location:</p>
                        <p className="text-4xl lg:text-5xl font-medium">
                            Dubai, <br />UAE
                        </p>
                    </div>

                </div>
                </div>
                
            </section>
        </>
    )
}

export default About
