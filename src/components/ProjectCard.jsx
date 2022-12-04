import React from 'react'

const ProjectCard = ({props}) => {

    return (
    <div name='carrrrrd' key={props.key} className= 'pt-10'>
        <span className='text-xl mt-20 underline'>{props.appName}</span>
        <img src={props.src} alt='' className='pt-10'></img>
        <div>
            <p className='text-xl mt-20'>{props.desc}</p>
        </div>
        <div className='flex text-xl '>
            <a href={props.github}>
                <button className="py-6 m-4 duration-200 hover:scale-105 hover:text-blue-200">
                Check out the Github Repo
                </button>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard