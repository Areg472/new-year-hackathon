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
            <div className="flex flex-col">
                <p>Flights!</p>
                <div className="flex flex-row mt-16 -space-x-24 ml-48">
                    <p className="basis-1/3 mt-20">Yerevan</p>
                    <img className="basis-1/3 w-[336px] h-[188px]"
                         src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4" alt="plane moving"/>
                    <p className="basis-1/3 mt-20">Tbilisi</p>
                </div>
                <div className="flex flex-row justify-center space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhGl1gwdLs7B5oKcCzPVTIrGWxt4ZM9q6Ajigsa"
                         className="w-auto h-[302px] border-black border-double border-4" alt="yerevan"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhG7aRQ7DGTW2ZDCGlgBULJ7VbdyN0QksOw83Pp"
                         className="w-auto h-[302px] border-black border-double border-4" alt="tbilisi"/>
                </div>
                <p className="mt-10 text-xl">Only for 80$!!!</p>
                <Link to="/Contact-Us">
                    <p className="mt-2 text-sm text-blue-600 underline">Contact for more info!</p>
                </Link>
                <div className="flex flex-row mt-16 -space-x-24 ml-48">
                    <p className="basis-1/3 mt-20">Tbilisi</p>
                    <img className="basis-1/3 w-[336px] h-[188px]"
                         src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4" alt="plane moving"/>
                    <p className="basis-1/3 mt-20">Sofia</p>
                </div>
                <div className="flex flex-row justify-center space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhG7aRQ7DGTW2ZDCGlgBULJ7VbdyN0QksOw83Pp"
                         className="w-auto h-[302px] border-black border-double border-4" alt="tbilisi"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGVze6N2QwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"
                         className="w-auto h-[302px] border-black border-double border-4" alt="sofia"/>
                </div>
                <p className="mt-10 text-xl">Only for 120$!!!</p>
                <Link to="/Contact-Us">
                    <p className="mt-2 text-sm text-blue-600 underline">Contact for more info!</p>
                </Link>
                <div className="flex flex-row mt-16 -space-x-24 ml-48">
                    <p className="basis-1/3 mt-20">Paris</p>
                    <img className="basis-1/3 w-[336px] h-[188px]"
                         src="https://utfs.io/f/QI8sw9xDXLhGcI1OxWYEXyQ0aSigwC6Lq8hAFxlMZVzm29n4" alt="plane moving"/>
                    <p className="basis-1/3 mt-20">Yerevan</p>
                </div>
                <div className="flex flex-row justify-center space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhGGFjgcf10ApdtU3j89slu1ymrYKi6hwvW5HbT"
                         className="w-auto h-[302px] border-black border-double border-4" alt="Paris"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGl1gwdLs7B5oKcCzPVTIrGWxt4ZM9q6Ajigsa"
                         className="w-auto h-[302px] border-black border-double border-4" alt="Yerevan"/>
                </div>
                <p className="mt-10 text-xl">Only for 200$!!!</p>
                <Link to="/Contact-Us">
                    <p className="mt-2 text-sm text-blue-600 underline">Contact for more info!</p>
                </Link>
            </div>
        </>
    )
}