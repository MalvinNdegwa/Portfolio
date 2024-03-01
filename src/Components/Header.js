import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="Navbar bg-nav text-white fixed w-screen ">
            <div className='flex justify-between items-center py-5 px-2'>
                <Link to='/' onClick={() => scrollToSection('intro')}>Malvin Muthee</Link>
                <div className='flex'>
                    <Link to='/' onClick={() => scrollToSection('intro')} className='mr-4 text-2xl sm:text-normal '>Home</Link>
                    <Link to='/' onClick={() => scrollToSection('intro')} className='mr-4 text-2xl sm:text-normal'>Intro</Link>
                    <Link to='/' onClick={() => scrollToSection('about')} className='mr-4 text-2xl sm:text-normal'>About</Link>
                    <Link to='/' onClick={() => scrollToSection('projects')} className='mr-4 text-2xl sm:text-normal '>Projects</Link>
                    <Link to='/' onClick={() => scrollToSection('contact')} className='mr-4 text-2xl sm:text-normal'>Contacts</Link>
                </div>
            </div>
        </div>
    );
}