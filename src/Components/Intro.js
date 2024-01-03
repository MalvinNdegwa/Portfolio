import { Link } from "react-router-dom";
export default function Intro() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div
            link to="intro"
            className="flex items-center justify-center h-screen bg-gradient-to-b from-nav to-intro text-white ">
            <div className="text-center ">
                <h2 className="text-4xl font-bold text-white">
                    Software Engineer
                </h2>
                <p className="mt-4 text-lg text-white">
                    Hello there, I'm Malvin Muthee. A passionate software engineer with a passion for using technology to solve challenging problems in society.
                </p>
                <Link
                    to='/' onClick={() => scrollToSection('contact')}
                    className='flex items-center justify-center mt-20 bg-white rounded-full text-black font-bold py-2 px-4 max-w-[150px] mx-auto'>
                    Contact me
                </Link>
            </div>
        </div>
    );
}
