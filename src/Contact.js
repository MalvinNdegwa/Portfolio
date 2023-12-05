import React from 'react';

const Contact = () => {
    const emailAddress = 'Malvinmuthee4@gmail.com';

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center p-4 border border-gray-300 rounded-md mt-4">
                <h2 className="text-2xl font-bold mb-2">Contact</h2>
                <p>Wanna Talk? Don't hesitate to reach out!</p>
                <a href={`mailto:${emailAddress}`} className="text-blue-500 font-bold hover:underline">{emailAddress}</a>
            </div>
            <div className="mt-8 text-center text-gray-600">
                <p>&copy; 2023 All rights reserved</p>
                {/* Add your social links here */}
                {/* Example: */}
                <div className="flex justify-center mt-2">
                    <a href="#" className="text-gray-600 hover:text-blue-500 mx-2">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 mx-2">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 mx-2">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
