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
                        <a
                            href="https://github.com/MalvinNdegwa"
                            className="text-gray-600 hover:text-blue-500 mx-2"
                            target='_blank'
                            rel="noreferrer">
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/malvin-muthee-59a8a2210/"
                            className="text-gray-600 hover:text-blue-500 mx-2"
                            target='_blank'
                            rel="noreferrer">
                                linkedin
                        </a>
                    </div>
                    <p>&copy; 2023 All rights reserved. Made by MALVIN MUTHEE</p>
                </div>
            </div>

        </div>

    );
}

export default Contact;
