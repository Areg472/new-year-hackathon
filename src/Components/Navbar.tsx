import {Link} from 'react-router-dom';
import ThemeSwitch from "./ThemeSwitcher.tsx";
import { motion } from "motion/react"

export function Navbar() {
    return (
        <>
            <div
                className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-5 md:space-y-0 mb-6 mt-2 ml-4">
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Link to="/">
                        <button
                            className="button leading-loose text-sm border-2 border-black w-32 border-double">Home
                        </button>
                    </Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Link to="/Tours">
                        <button
                            className="button leading-loose text-sm border-2 border-black w-32 border-double">Tours
                        </button>
                    </Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Link to="/Flights">
                        <button
                            className="button leading-loose text-sm border-2 border-black w-32 border-double">Flights
                        </button>
                    </Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <Link to="/Contact-Us">
                        <button
                            className="button leading-loose text-sm border-2 border-black w-32 border-double">Contact
                            Us
                        </button>
                    </Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                    <div
                        className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-4 ml-[120px] lg:ml-0">
                        <div className="flex flex-col mr-32 md:mr-0 justify-center md:ml-4 lg:ml-0 md:mt-[1.5px]">
                            <ThemeSwitch/>
                        </div>
                        <p className="mt-4 md:mt-1 -ml-32 md:ml-6 lg:ml-0">90s mode!</p>
                    </div>
                </motion.div>
            </div>
        </>
)
}