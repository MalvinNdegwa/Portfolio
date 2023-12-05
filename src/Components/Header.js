import '../index.css'
export default function Header() {
    return (
        <div className="Navbar bg-amber-300	fixed top-0 w-screen" >
            <ul className='flex justify-between py-5 px-2'>
                <li className='mr-auto'>Malvin Ndegwa</li>
                <li className=' mr-4'>Home</li>
                <li className=' mr-4'>About</li>
                <li className=' mr-4'>Projects</li>
                <li className=' mr-4'>Contacts</li>
            </ul>
        </div>
    )
}