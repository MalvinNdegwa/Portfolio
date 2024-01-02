import html from './Images/html.svg';
import css from './Images/css.svg';
import javascript from './Images/javascript.svg';
import react from './Images/react.svg';
import tailwind from './Images/tailwind.svg';
import mongo from './Images/mongodb.svg';
import mysql from './Images/mysql.svg';
import php from './Images/php.svg';
import nodejs from './Images/nodejs.svg';
import Python from './Images/python.svg';
import WordPress from './Images/wordpress.svg';

export default function About() {
    return (
        <div className="p-8  bg-intro   ">
            <h1 className="text-center text-3xl font-bold mb-8 text-white"> About me </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="justify-self-start">
                    <h2 className="text-2xl mb-4">Get To Know Me</h2>
                    <p className="text-justify">
                        As a junior software engineer, I possess a diverse skill set that spans both frontend and backend development. My expertise includes HTML, CSS, JavaScript, ReactJS, NodeJS, Tailwind, Python, PHP, SQL, MongoDB, and WordPress. I have cultivated these skills through a combination of coursework, internships, and personal projects. Known for my quick learning abilities and adaptability, I excel in navigating new work environments and embracing emerging technologies. My collaborative spirit thrives in both remote and on-site settings, where I contribute to the seamless development of outstanding applications.
                    </p>
                </div>
                <div className="text-center">
                    <h2 className="text-2xl">My skills</h2>

                    <div className="flex flex-col justify-center items-center space-x-4 mt-10">
                        <div className="flex">
                            <img src={html} alt="html_logo" className="w-16 h-16 mr-5" />
                            <img src={css} alt="css_logo" className="w-16 h-16" />
                            <img src={javascript} alt="js_logo" className="w-16 h-16 ml-5" />
                            <img src={react} alt="react_logo" className="w-16 h-16 ml-7" />
                        </div>
                        <div className="flex mt-4">
                            <img src={tailwind} alt="tailwind_logo" className="w-20 h-20 mr-5" />
                            <img src={mongo} alt="mongo_db logo" className="w-20 h-20 ml-5" />
                            <img src={mysql} alt="mysql logo" className="w-20 h-20 ml-5" />
                            <img src={php} alt="php logo" className="w-20 h-20 ml-5" />
                        </div>
                        <div className="flex mt-4">
                            <img src={nodejs} alt="nodejs logo" className="w-20 h-20 mr-5" />
                            <img src={Python} alt="python logo" className="w-20 h-20 ml-5" />
                            <img src={WordPress} alt="wordpress logo" className="w-20 h-20 ml-5" />
                            
                            {/* Add more skills or adjust the styling as needed */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
