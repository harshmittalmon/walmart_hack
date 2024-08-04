import React from 'react';

const AppLinks = () => {
    return (
        <div className="app-links flex items-center justify-center h-96 ">
            <div className="text-center p-4">
                <h1 className="text-4xl font-bold mb-12 text-white">Download Our App</h1>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a 
                        href="https://play.google.com/store/apps" 
                        target="_blank" 
                        className="bg-[rgb(233,33,34)] text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                    >
                        Google Play
                    </a>
                    <a 
                        href="https://apps.apple.com/us/genre/ios/id36" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white text-black py-2 px-4 rounded hover:bg-gray-700 transition"
                    >
                        App Store
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AppLinks;
