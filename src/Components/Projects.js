import React from 'react';
import meme_generator from './Images/meme_generator.png';
import farmers_seed from './Images/farmers_seed.png'

export default function Projects() {
    const projectDetails = [
        {
            id: 1,
            image: farmers_seed,
            title: "Farmers Seed Registration System",
            description: "Minim esse eiusmod irure aliqua velit ad cupidatat eiusmod dolore culpa. Minim ipsum irure minim sit in sit. Lorem non nostrud minim laborum ut. Irure aute do labore consectetur eiusmod.",
            githubLink: "https://github.com/MalvinNdegwa/Farmer-s-Seed-Distribution-System",
            liveLink: ""
        },
        {
            id: 2,
            image: meme_generator,
            title: "Meme Generator",
            description: "Minim esse eiusmod irure aliqua velit ad cupidatat eiusmod dolore culpa. Minim ipsum irure minim sit in sit. Lorem non nostrud minim laborum ut. Irure aute do labore consectetur eiusmod.",
            githubLink: "https://github.com/MalvinNdegwa/Meme-Generator",
            liveLink: "https://meme-generator-3779ce.netlify.app/"
        },
        {
            id: 3,
            image: meme_generator,
            title: "Blog App",
            description: "Minim esse eiusmod irure aliqua velit ad cupidatat eiusmod dolore culpa. Minim ipsum irure minim sit in sit. Lorem non nostrud minim laborum ut. Irure aute do labore consectetur eiusmod.",
            githubLink: "https://github.com/MalvinNdegwa/Blog-app",
            liveLink: ""
        },
       
    ];

    return (
        <div className="h-screen p-10">
            <h1 className="text-center text-3xl font-bold mb-8">MY PROJECTS</h1>
            <p className="text-center text-2xl font-bold mb-8">
                Here are some samples of my work
            </p>
            <div>
                {projectDetails.map((project) => (
                    <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-yellow-300 p-8 rounded-lg shadow-lg mb-8">
                        <div>
                            <img className=" hover:scale-105 w-full h-auto" src={project.image} alt="meme_generator" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                            <p className="text-gray-700">
                                {project.description}
                            </p>
                            <div className="flex mt-4">
                                <a
                                    href={project.githubLink}
                                    rel="noreferrer"
                                    target='_blank'
                                    className='flex bg-blue-500 rounded-full text-white font-bold py-2 px-4 max-w-[150px] mr-4'>
                                    View Code
                                </a>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        rel="noreferrer"
                                        target='_blank'
                                        className='flex bg-blue-500 rounded-full text-white font-bold py-2 px-4 max-w-[150px]'>
                                        View Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
