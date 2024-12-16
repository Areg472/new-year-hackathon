import MetaTags from "../Components/MetaTags.tsx";
import {Navbar} from "../Components/Navbar.tsx";
import {Link} from 'react-router-dom';
import {motion} from "motion/react"

export function Homepage() {
    return (
        <>
            <MetaTags
                title='Areg travels'
                description='My website for codedex hackathon'
                image='https://utfs.io/f/QI8sw9xDXLhGwi2l69SRX6DVsvJiC2qWgOU98GMQjlmH1BrL'
                name='Areg travels'
            />
            <Navbar/>
            <div>
                <motion.div whileHover={{scale: 1.1}}>
                    <img className="w-20 h-20 ml-[50%] translate-x-[-50%] mb-4 border-black border-double border-4"
                         src="https://utfs.io/f/QI8sw9xDXLhGwi2l69SRX6DVsvJiC2qWgOU98GMQjlmH1BrL" alt="globe"/></motion.div>
                    <h1>Areg travels</h1>
                    <p className="text-[10px] mt-4">The modern parody of 90s websites</p>
                    <p className="text-xs mt-4">Welcome to Areg travels! Here you can explore flights and tours with
                        Areg!</p>
                    <div className="flex flex-col md:flex-row mb-16 md:mb-0">
                        <div className="basis-1/3 mt-16">
                            <p>Tours starting at 50$!!!</p>
                            <Link to="/Tours">
                                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                    <button
                                        className="button leading-loose text-sm border-2 border-black w-32 border-double mt-3 duration-200">Click
                                        here!!!
                                    </button>
                                </motion.div>
                            </Link>
                        </div>
                        <div className="basis-1/3 mt-16">
                            <p>Flights starting at 80$!!!</p>
                            <Link to="/Flights">
                                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                    <button
                                        className="button leading-loose text-sm border-2 border-black w-32 border-double mt-3 duration-200">Click
                                        here!!!
                                    </button>
                                </motion.div>
                            </Link>
                        </div>
                        <div className="basis-1/3 mt-16">
                            <p>Contact Us here!!!</p>
                            <Link to="/Contact-Us">
                                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                                    <button
                                        className="button leading-loose text-sm border-2 border-black w-32 border-double mt-3 duration-200">Click
                                        here!!!
                                    </button>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
            </div>
        </>
)
}
