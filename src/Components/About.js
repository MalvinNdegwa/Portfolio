import html from './Images/html.svg';
import css from './Images/css.svg';
import javascript from './Images/javascript.svg';
import react from './Images/react.svg';
import tailwind from './Images/tailwind.svg';
import mongo from './Images/mongodb.svg';
import mysql from './Images/mysql.svg';
import php from './Images/php.svg';

export default function About() {
    return (
        <div className="p-8  bg-intro text-white">
            <h1 className="text-center text-3xl font-bold mb-8"> About me </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="justify-self-start">
                    <h2 className="text-2xl mb-4">Get To Know Me</h2>
                    <p className="text-justify">
                        I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
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
                            {/* Add more skills or adjust the styling as needed */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
