import meme_generator from './Images/meme_generator.png'

export default function Projects() {
    return (
        <div className="h-screen p-10">
            <h1 className="text-center text-3xl font-bold mb-8">MY PROJECTS</h1>
            <p className="text-center text-2xl font-bold mb-8">
                Here are some samples of my work
            </p>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8  bg-yellow-300 p-8 rounded-lg shadow-lg">
                    <div>
                        <img className="w-full h-auto" src={meme_generator} alt="meme_generator" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Farmers Seed Distribution System</h2>
                        <p className="text-gray-700">
                            Officia nulla elit ullamco aliqua aute tempor consequat ullamco deserunt duis non velit commodo in. Laboris non nisi sint ad ea tempor. Veniam adipisicing commodo cupidatat incididunt minim deserunt eiusmod anim ad sit. Mollit enim reprehenderit culpa elit ex. Commodo cupidatat esse dolore in cupidatat. Anim irure labore irure excepteur laborum nostrud duis nostrud eu sunt eu id. Magna eiusmod exercitation elit ut.
                        </p>
                        <div>
                            <a
                                href='https://github.com/MalvinNdegwa/Farmer-s-Seed-Distribution-System'
                                rel="noreferrer"
                                target='_blank'
                                className='flex mt-10 bg-blue-500 rounded-full text-white font-bold py-2 px-4 max-w-[200px]'>
                                View Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}