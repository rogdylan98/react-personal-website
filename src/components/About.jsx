import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                I started my journey to becoming a software engineer
                while studying at the University of Texas at Austin. 
                It never occured to me how fun programming can be until I started
                working on projects with friends, and eventually it became a personal hobby.
                 
            </p>

            <br />
            <p className='text-xl'>
                Now I'm trying to find my home in Silicon Valley as a software engineer and a human being.
                I've joined the Society of Hispanic Professional Engineers- Silicon Valley chapter to give back
                any way I can. In my free time you can find me at Guildhouse in San Jose playing games, singing my heart
                out at karaoke, and discovering the best food spots in the Bay Area. I'm available to interview and work immediately
                and please contact me if you'd like to work with me!
            </p>
        </div>

    </div>
  )
}

export default About