import {Link} from 'react-router-dom';
import ThemeSwitch from "./ThemeSwitcher.tsx";

export function Navbar() {
    return (
        <>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-5 md:space-y-0 mb-6 mt-2 ml-4">
            <Link to="/">
                <button className="button leading-loose text-sm border-2 border-black w-32 border-double hover:scale-110 active:scale-90 duration-200">Home</button>
            </Link>
            <Link to="/Tours">
                <button className="button leading-loose text-sm border-2 border-black w-32 border-double hover:scale-110 active:scale-90 duration-200">Tours</button>
            </Link>
            <Link to="/Flights">
                <button className="button leading-loose text-sm border-2 border-black w-32 border-double hover:scale-110 active:scale-90 duration-200">Flights</button>
            </Link>
            <Link to="/Contact-Us">
                <button className="button leading-loose text-sm border-2 border-black w-32 border-double hover:scale-110 active:scale-90 duration-200">Contact Us</button>
            </Link>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-4 ml-[120px] lg:ml-0">
                <div className="flex flex-col mr-32 md:mr-0 justify-center md:ml-4 lg:ml-0 md:mt-[1.5px]">
                    <ThemeSwitch/>
                </div>
                <p className="mt-4 md:mt-1 -ml-32 md:ml-6 lg:ml-0">90s mode!</p>
            </div>
        </div>
    </>
)
}