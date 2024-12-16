import {Navbar} from "../Components/Navbar.tsx";
import MetaTags from "../Components/MetaTags.tsx";
import {Link} from "react-router-dom";

export function Tours() {
    return(
        <>
            <MetaTags
                title='Areg travels - Tours'
                description='My website for codedex hackathon'
                image='https://utfs.io/f/QI8sw9xDXLhGwi2l69SRX6DVsvJiC2qWgOU98GMQjlmH1BrL'
                name='Areg travels'
            />
            <Navbar/>
            <div className="flex flex-col mt-10">
                <p>Yerevan Tours!</p>
                <div className="flex flex-col mb-6 md:flex-row md:-space-x-14 md:mb-0 md:items-start items-center md:ml-24">
                    <p className="basis-1/3 mt-24">Yerevan</p>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGmVqJNoWJMBhlTHewRUuyk1OoiDs3Cntx2GPc" alt="bus moving"
                         className="w-[336px] h-auto justify-center items-center basis-1/3"/>
                    <p className="basis-1/3 md:mt-24 mb-6 md:mb-0">Gyumri</p>
                </div>
                <p className="mb-10">Explore the wonders of Gyumri, the 2nd largest city in Armenia! In this tour we
                    will visit a Black castle, Frunzik's home-museum and Isahakyan's home-museum, and eat in Cherqezi
                    Dzor</p>
                <div className="flex flex-col space-y-6 md:flex-row items-center md:space-y-0 justify-center md:space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhG9MC30ooEDCW1L37JxKPFhZuloQvzV29IEAg4"
                         className="w-[201px] h-[302px] border-black border-double border-4 object-cover md:object-none" alt="gyumri wall"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGku7lCgvIBwPv8aifGnrD9pZ7FhuJeyE6MYTz"
                         className="w-[201px] h-[302px] border-black border-double border-4 object-cover md:object-none" alt="gyumri city"/>

                </div>
                <p className="mt-10 text-xl">Only for 70$!!!</p>
                <Link to="/Contact-Us">
                    <p className="mt-2 text-sm text-blue-600 dark:text-rose-600 underline">Contact for more info!</p>
                </Link>
            </div>
            <div className="flex flex-col mt-10">
                <div className="flex flex-col mb-6 md:flex-row md:-space-x-2 md:mb-0 md:items-start items-center md:mr-28">
                    <p className="basis-1/3 mt-20">Yerevan</p>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGmVqJNoWJMBhlTHewRUuyk1OoiDs3Cntx2GPc" alt="bus moving"
                         className="w-auto h-[188px] justify-center items-center basis-1/5"/>
                    <p className="basis-1/5 md:mt-20">Sevan</p>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGmVqJNoWJMBhlTHewRUuyk1OoiDs3Cntx2GPc" alt="bus moving"
                         className="w-auto h-[188px] justify-center items-center basis-1/5"/>
                    <p className="basis-1/5 md:mt-20 mb-6 md:mb-0">Haghartsin</p>
                </div>
                <p className="mb-10">Explore the wonders of Sevan and Haghartsin. Sevan lake is the largest lake in
                    Armenia while Haghartsin Monastery is built between 10th and 13th centuries!</p>
                <div className="flex flex-col space-y-6 md:flex-row items-center md:space-y-0 justify-center md:space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhGjHJqrUzpOS3rA9TEpVRlYJbcxtInX4UwgN1i"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover md:object-none" alt="sevan"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"
                         className="w-auto h-[302px] border-black border-double border-4 object-cover md:object-none" alt="haghartsin"/>
                </div>
                <p className="mt-10 text-xl">Only for 50$!!!</p>
                <Link to="/Contact-Us">
                    <p className="mt-2 text-sm text-blue-600 dark:text-rose-600 underline mb-16">Contact for more info!</p>
                </Link>
            </div>
        </>
    )
}