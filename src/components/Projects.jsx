import React from 'react'
import redRidingHood from '../assets/cropped1.png';
import plantstagram from '../assets/feed.png'
import ProjectCard from './ProjectCard';

const Projects = () => {

    const projects = [
        {
            id: 1,
            src: redRidingHood,
            desc: 'Studying economics and math in college made me extremely interested in finance, so I decided to put my full-stack skills to the test by making a clone of Robinhood! All of the css was custom made, and I was able to incorporate the Yahoo Finance API to query for updated stock prices!',
            appName: 'Red Riding Hood',
            github: 'https://github.com/rogdylan98/RedRidingHood'
        },
        {
            id: 2,
            src: plantstagram,
            desc: 'A couple of friends and I wanted to challenge ourselves by cloning a large social media platform, and since we all love plants we decided on plantstagram. For image upload we incorporated Firebase cloud storage, and our users are able to like, comment, and follow other users!',
            appName: 'Plantstagram',
            github: 'https://github.com/MeiMeiYS/plantstagram'
        },
    ];

  return (
    <div name='portfolio' className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div name='card' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
            </div>
            {projects.map(({id, src, desc, appName, github}) => (
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                    <ProjectCard props={{'key': id, 'src': src, 'desc': desc, 'appName': appName, 'github': github}} />
                </div>
            ))}
        </div>
    </div>
  )
};

export default Projects