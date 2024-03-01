import React from 'react';
import meme_generator from './Images/meme_generator.png';
import farmers_seed from './Images/farmers_seed.png'
import blog_app from './Images/blog_app.png'

export default function Projects() {
    const projectDetails = [
        {
            id: 1,
            image: farmers_seed,
            title: "Farmers Seed Registration System",
            description: "This is a web application that allows farmer's from within a county to directly order verified farming seeds from seed companies and therefore eliminating the middle man. The availability of verified seed leads to higher yields and therefore maximisation of profits for the farmers. The technologies used for the implementation are HTML, CSS, JavaScript and PHP and MySQL.",
            githubLink: "https://github.com/MalvinNdegwa/Farmer-s-Seed-Distribution-System",
            liveLink: ""
        },
        {
            id: 2,
            image: meme_generator,
            title: "Meme Generator",
            description: "This is a web application that allows one to create memes from popular meme Images. The application allows users to write their desired text on top of the Images. The images are obtained from the popular memes API. The application was implemented using HTML, CSS, JavaScript, and ReactJS.",
            githubLink: "https://github.com/MalvinNdegwa/Meme-Generator",
            liveLink: "https://meme-generator-3779ce.netlify.app/"
        },
        {
            id: 3,
            image: blog_app,
            title: "Blog App",
            description: "A web based blog application that allows users to read blogs. The users can also create accounts that will allow them to create and post their blogs. The blogs also offer image support. This application was implemented using HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS and MongoDB.",
            githubLink: "https://github.com/MalvinNdegwa/Blog-app",
            liveLink: ""
        },
       
    ];

    return (
        <div className="p-10 bg-intro text-white">
            <h1 className="text-center text-3xl font-bold mb-8">MY PROJECTS</h1>
            <p className="text-center text-3xl sm:text-normal font-bold mb-8">
                Here are some samples of my work
            </p>
            <div>
                {projectDetails.map((project) => (
                    <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-yellow-300 p-8 rounded-lg shadow-lg mb-8">
                        <div>
                            <img className="hover:scale-105 w-full h-auto " src={project.image} alt="meme_generator" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-4xl sm:text-normal font-semibold underline mb-4">{project.title}</h2>
                            <p className="text-black text-2xl sm:text-normal">
                                {project.description}
                            </p>
                            <div className="flex mt-4">
                                <a
                                    href={project.githubLink}
                                    rel="noreferrer"
                                    target='_blank'
                                    className='flex bg-white rounded-full text-black text-3xl sm:text-normal font-bold py-2 px-4 max-w-[250px] mr-4'>
                                    View Code
                                </a>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        rel="noreferrer"
                                        target='_blank'
                                        className='flex bg-white rounded-full text-black text-3xl sm:text-normal font-bold py-2 px-4 max-w-[250px]'>
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
