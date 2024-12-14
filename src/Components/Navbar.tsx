import {Link} from 'react-router-dom';

import './Navbar.css'

export function Navbar() {
    return (
        <>
        <div className="flex flex-row justify-center space-x-5 mb-6 mt-2">
            <Link to="/">
                <button className="button leading-loose text-sm border-2 border-black w-32 border-double">Home</button>
            </Link>
            <Link to="/Tours">
                <button className="button leading-loose text-sm border-2 border-black w-32 border-double">Tours</button>
            </Link>
            <Link to="/Flights">
                <button className="button leading-loose text-sm border-2 border-black w-32 border-double">Flights</button>
            </Link>
            <Link to="/Contact-Us">
                <button className="button leading-loose text-sm border-2 border-black w-32 border-double">Contact Us</button>
            </Link>
        </div>
    </>
)
}