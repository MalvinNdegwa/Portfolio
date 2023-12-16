import '../index.css'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div className="Navbar bg-amber-300	fixed top-0 w-screen" >
            <p className='flex justify-between py-5 px-2'>
                <Link to='/'>Malvin Ndegwa</Link>
                <Link to='/' className='mr-4'>Home</Link>
                <Link to='/intro' className='mr-4'>Intro</Link>
                <Link to='/about' className='mr-4'>About</Link>
                <Link to='/projects' className='mr-4'>Projects </Link>
                <Link to='/contact' className='mr-4'>Contacts </Link>
            </p>
        </div>
    )
}