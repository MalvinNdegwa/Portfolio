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
                    <Link to='/' onClick={() => scrollToSection('intro')} className='mr-4'>Home</Link>
                    <Link to='/' onClick={() => scrollToSection('intro')} className='mr-4'>Intro</Link>
                    <Link to='/' onClick={() => scrollToSection('about')} className='mr-4'>About</Link>
                    <Link to='/' onClick={() => scrollToSection('projects')} className='mr-4'>Projects</Link>
                    <Link to='/' onClick={() => scrollToSection('contact')} className='mr-4'>Contacts</Link>
                </div>
            </div>
        </div>
    );
}