import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center text-center h-screen p-4 bg-white" >
            <h1 className="font-bold text-4xl mb-6">Hey Developers and Debuggers</h1>
            <h2 className="text-2xl mb-6 font-medium">How is your programming journey so far?</h2>
            <p className="text-xl mb-4 mt-6">
                Let’s return back to the homepage.
            </p>
            <Link
                to="/"
                className="mt-1  lg:mb-3 py-3 px-6 rounded-full bg-black text-white font-medium"
            >
                BACK
            </Link>
        </div>
    )
}

export default NotFound