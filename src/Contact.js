import github from './Components/Images/github.svg'
import linkedin from './Components/Images/linkedin.svg'

const Contact = () => {
    const emailAddress = 'Malvinmuthee4@gmail.com';

    return (
        <div className="">
            <div className="flex flex-col items-center justify-between p-4 border border-gray-300 rounded-md mt-4 bg-gray-100 ">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Contact</h2>
                    <p>Wanna Talk? Don't hesitate to reach out!</p>
                    <a href={`mailto:${emailAddress}`} className="text-blue-500 font-bold hover:underline">{emailAddress}</a>
                </div>

                <div className="mt-8 text-center text-gray-600">
                    <div className="flex justify-center mt-2">
                        <a href='https://github.com/MalvinNdegwa' target='_blank' rel="noreferrer">
                            <img
                                src={github}
                                alt='Github logo'
                                className='w-16 h-16'

                            />
                        </a>
                        <a href="https://www.linkedin.com/in/malvin-muthee-59a8a2210/" target='_blank' rel="noreferrer">
                            <img
                                src={linkedin}
                                alt='Linkedin Logo'
                                className='w-16 h-16 ml-10'

                            />
                        </a>
                    </div>
                    <p className='mt-10'>&copy; 2023 All rights reserved. Made by MALVIN MUTHEE</p>
                </div>
            </div>

        </div>

    );
}

export default Contact;
