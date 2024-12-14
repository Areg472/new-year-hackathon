import {Navbar} from "../Components/Navbar.tsx";
import MetaTags from "../Components/MetaTags.tsx";
import {Link} from "react-router-dom";

export function Flights() {
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
                <div className="flex flex-col mb-6 md:flex-row md:-space-x-14 md:mb-0 md:items-start items-center md:ml-24">
                    <p className="basis-1/3 mt-24">Yerevan</p>
                    <img className="basis-1/3 w-[336px] h-auto"
                         src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4" alt="plane moving"/>
                    <p className="basis-1/3 md:mt-24">Tbilisi</p>
                </div>
                <div className="flex flex-col space-y-6 md:flex-row items-center md:space-y-0 justify-center md:space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhGl1gwdLs7B5oKcCzPVTIrGWxt4ZM9q6Ajigsa"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover mb:object-none" alt="yerevan"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhG7aRQ7DGTW2ZDCGlgBULJ7VbdyN0QksOw83Pp"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover mb:object-none" alt="tbilisi"/>
                </div>
                <p className="mt-10 text-xl">Only for 80$!!!</p>
                <Link to="/Contact-Us">
                    <p className="mt-2 text-sm text-blue-600 dark:text-rose-600 underline">Contact for more info!</p>
                </Link>
                <div className="flex flex-col mb-6 md:flex-row md:-space-x-14 md:mb-0 md:items-start items-center md:ml-24">
                    <p className="basis-1/3 mt-24">Tbilisi</p>
                    <img className="basis-1/3 w-[336px] h-auto"
                         src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4" alt="plane moving"/>
                    <p className="basis-1/3 md:mt-24">Sofia</p>
                </div>
                <div className="flex flex-col space-y-6 md:flex-row items-center md:space-y-0 justify-center md:space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhG7aRQ7DGTW2ZDCGlgBULJ7VbdyN0QksOw83Pp"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover mb:object-none" alt="tbilisi"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGVze6N2QwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover mb:object-none" alt="sofia"/>
                </div>
                <p className="mt-10 text-xl">Only for 120$!!!</p>
                <Link to="/Contact-Us">
                    <p className="mt-2 text-sm text-blue-600 dark:text-rose-600 underline">Contact for more info!</p>
                </Link>
                <div className="flex flex-col mb-6 md:flex-row md:-space-x-14 md:mb-0 md:items-start items-center md:ml-24">
                    <p className="basis-1/3 mt-24">Paris</p>
                    <img className="basis-1/3 w-[336px] h-auto"
                         src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4" alt="plane moving"/>
                    <p className="basis-1/3 md:mt-24">Yerevan</p>
                </div>
                <div className="flex flex-col space-y-6 md:flex-row items-center md:space-y-0 justify-center md:space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhGGFjgcf10ApdtU3j89slu1ymrYKi6hwvW5HbT"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover mb:object-none" alt="Paris"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGl1gwdLs7B5oKcCzPVTIrGWxt4ZM9q6Ajigsa"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover mb:object-none" alt="Yerevan"/>
                </div>
                <p className="mt-10 text-xl">Only for 200$!!!</p>
                <Link to="/Contact-Us">
                    <p className="mt-2 text-sm text-blue-600 dark:text-rose-600 underline mb-16">Contact for more info!</p>
                </Link>
            </div>
        </>
    )
}