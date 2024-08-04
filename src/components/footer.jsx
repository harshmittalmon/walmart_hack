import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 ">
                <div className="flex flex-wrap  ">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0  flex justify-center items-center flex-col ">
                        <h2 className="text-xl font-bold mb-2">Company</h2>
                        <ul className='flex flex-col items-center'>
                            <li className="mb-1"><a href="#about" className="hover:underline">About Us</a></li>
                            <li className="mb-1"><a href="#careers" className="hover:underline">Careers</a></li>
                            <li className="mb-1"><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center items-center flex-col">
                        <h2 className="text-xl font-bold mb-2">Resources</h2>
                        <ul className='flex flex-col items-center'>
                            <li className="mb-1"><a href="#blog" className="hover:underline">Blog</a></li>
                            <li className="mb-1"><a href="#help" className="hover:underline">Help Center</a></li>
                            <li className="mb-1"><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3 flex justify-center items-center flex-col">
                        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#facebook" className="hover:text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h10v-9h-3v-3h3v-2c0-3.3 2-5 4.9-5 1.4 0 2.7.1 3.1.1v3.6h-2.1c-1.6 0-2 .8-2 1.9v2.4h3.5l-.5 3H17v9h5c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/>
                                </svg>
                            </a>
                            <a href="#twitter" className="hover:text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.4 8.58 8.58 0 0 1-2.72 1.05 4.3 4.3 0 0 0-7.55 2.94c0 .34.04.68.11 1A12.15 12.15 0 0 1 3 5.1 4.28 4.28 0 0 0 4.15 12a4.3 4.3 0 0 1-1.94-.53v.05c0 2.1 1.49 3.86 3.47 4.26a4.3 4.3 0 0 1-1.93.07 4.3 4.3 0 0 0 4.02 3 8.64 8.64 0 0 1-5.34 1.84c-.35 0-.7-.02-1.04-.06A12.17 12.17 0 0 0 6.6 21.6c7.88 0 12.2-6.53 12.2-12.2v-.56c.83-.6 1.56-1.36 2.13-2.22a8.49 8.49 0 0 1-2.37.65z"/>
                                </svg>
                            </a>
                            <a href="#instagram" className="hover:text-gray-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.1.1 1.7.2 2.1.4.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.3 1 .4 2.1.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.1-.2 1.7-.4 2.1-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .3-2.1.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.1-.1-1.7-.2-2.1-.4-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.3-1-.4-2.1-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.1.2-1.7.4-2.1.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.3 2.1-.4 1.3-.1 1.7-.1 4.9-.1z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Adh company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
