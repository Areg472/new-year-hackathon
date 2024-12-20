import {Navbar} from "../Components/Navbar.tsx";
import MetaTags from "../Components/MetaTags.tsx";
import {Link} from "react-router-dom";
import { motion } from "motion/react";
import {useRef} from "react";

export function Flights() {
    const scrollRef = useRef(null)
    return(
        <>
            <MetaTags
                title='Areg travels - Flights'
                description='My website for codedex hackathon'
                image='https://utfs.io/f/QI8sw9xDXLhGwi2l69SRX6DVsvJiC2qWgOU98GMQjlmH1BrL'
                name='Areg travels'
            />
            <Navbar/>
            <div className="flex flex-col mt-10">
                <p>Flights!</p>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1}}}
                            viewport={{root: scrollRef, margin: "40px 0px 0px 0px", once: true}}>
                    <div
                        className="flex flex-col mb-6 lg:flex-row lg:-space-x-14 lg:mb-0 lg:items-start items-center lg:ml-24">
                        <p className="basis-1/3 mt-24">Yerevan</p>
                        <img className="basis-1/3 w-[336px] h-auto"
                             src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4"
                             alt="plane moving"/>
                        <p className="basis-1/3 lg:mt-24">Tbilisi</p>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1}}}
                            viewport={{root: scrollRef, margin: "40px 0px 0px 0px", once: true}}>
                    <div
                        className="flex flex-col space-y-6 lg:flex-row items-center lg:space-y-0 justify-center lg:space-x-36">
                        <img src="https://utfs.io/f/QI8sw9xDXLhGl1gwdLs7B5oKcCzPVTIrGWxt4ZM9q6Ajigsa"
                             className="w-auto h-[302px] border-black border-double border-4 object-cover lg:object-fit"
                             alt="yerevan"/>
                        <img src="https://utfs.io/f/QI8sw9xDXLhG7aRQ7DGTW2ZDCGlgBULJ7VbdyN0QksOw83Pp"
                             className="w-auto h-[302px] md:h-[303px] lg:h-[302px] border-black border-double border-4 object-cover lg:object-fit"
                             alt="tbilisi"/>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1}}}
                            viewport={{root: scrollRef, margin: "40px 0px 0px 0px", once: true}}>
                    <p className="mt-10 text-xl">Only for 80$!!!</p>
                    <Link to="/Contact-Us">
                        <p className="mt-2 text-sm text-blue-600 dark:text-rose-600 underline">Contact for more
                            info!</p>
                    </Link>
                </motion.div>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1}}}
                            viewport={{root: scrollRef, margin: "40px 0px 0px 0px", once: true}}>
                    <div
                        className="flex flex-col mb-6 lg:flex-row lg:-space-x-14 lg:mb-0 lg:items-start items-center lg:ml-24">
                        <p className="basis-1/3 mt-24">Tbilisi</p>
                        <img className="basis-1/3 w-[336px] h-auto"
                             src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4"
                             alt="plane moving"/>
                        <p className="basis-1/3 lg:mt-24">Sofia</p>
                    </div>
                </motion.div>
                <div
                    className="flex flex-col space-y-6 lg:flex-row items-center lg:space-y-0 justify-center lg:space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhG7aRQ7DGTW2ZDCGlgBULJ7VbdyN0QksOw83Pp"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover lg:object-fit"
                         alt="tbilisi"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGVze6N2QwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover lg:object-fit"
                         alt="sofia"/>
                </div>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1}}}
                            viewport={{root: scrollRef, margin: "40px 0px 0px 0px", once: true}}>
                    <p className="mt-10 text-xl">Only for 120$!!!</p>
                    <Link to="/Contact-Us">
                        <p className="mt-2 text-sm text-blue-600 dark:text-rose-600 underline">Contact for more
                            info!</p>
                    </Link>
                </motion.div>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1}}}
                            viewport={{root: scrollRef, margin: "40px 0px 0px 0px", once: true}}>
                    <div
                        className="flex flex-col mb-6 lg:flex-row lg:-space-x-14 lg:mb-0 lg:items-start items-center lg:ml-24">
                        <p className="basis-1/3 mt-24">Paris</p>
                        <img className="basis-1/3 w-[336px] h-auto"
                             src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4"
                             alt="plane moving"/>
                        <p className="basis-1/3 lg:mt-24">Yerevan</p>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1}}}
                            viewport={{root: scrollRef, margin: "40px 0px 0px 0px", once: true}}>
                    <div
                        className="flex flex-col space-y-6 lg:flex-row items-center lg:space-y-0 justify-center lg:space-x-36">
                        <img src="https://utfs.io/f/QI8sw9xDXLhGGFjgcf10ApdtU3j89slu1ymrYKi6hwvW5HbT"
                             className="w-auto h-[302px] md:h-[321px] lg:h-[302px] border-black border-double border-4 object-cover lg:object-fit"
                             alt="Paris"/>
                        <img src="https://utfs.io/f/QI8sw9xDXLhGl1gwdLs7B5oKcCzPVTIrGWxt4ZM9q6Ajigsa"
                             className="w-auto h-[302px] border-black border-double border-4 object-cover lg:object-fit"
                             alt="Yerevan"/>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1}}}
                            viewport={{root: scrollRef, margin: "40px 0px 0px 0px", once: true}}>
                    <p className="mt-10 text-xl">Only for 200$!!!</p>
                    <Link to="/Contact-Us">
                        <p className="mt-2 text-sm text-blue-600 dark:text-rose-600 underline mb-16">Contact for more
                            info!</p>
                    </Link>
                </motion.div>
            </div>
        </>
)
}