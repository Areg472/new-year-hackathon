import {Navbar} from "../Components/Navbar.tsx";
import MetaTags from "../Components/MetaTags.tsx";

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
                <div className="flex flex-row -space-x-14 ml-24">
                    <p className="basis-1/3 mt-20">Yerevan</p>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGmVqJNoWJMBhlTHewRUuyk1OoiDs3Cntx2GPc" alt="bus moving"
                         className="w-[336px] h-[188px] justify-center items-center basis-1/3"/>
                    <p className="basis-1/3 mt-20">Gyumri</p>
                </div>
                <div className="flex flex-row justify-center space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhG9MC30ooEDCW1L37JxKPFhZuloQvzV29IEAg4"
                         className="w-[201px] h-[302px] border-black border-double border-4" alt="gyumri wall"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGku7lCgvIBwPv8aifGnrD9pZ7FhuJeyE6MYTz"
                         className="w-[201px] h-[302px] border-black border-double border-4" alt="gyumri city"/>

                </div>
            </div>
            <div className="flex flex-col mt-10">
                <div className="flex flex-row  mr-24">
                    <p className="basis-1/3 mt-20">Yerevan</p>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGmVqJNoWJMBhlTHewRUuyk1OoiDs3Cntx2GPc" alt="bus moving"
                         className="w-auto h-[188px] justify-center items-center basis-1/5"/>
                    <p className="basis-1/5 mt-20">Sevan</p>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGmVqJNoWJMBhlTHewRUuyk1OoiDs3Cntx2GPc" alt="bus moving"
                         className="w-auto h-[188px] justify-center items-center basis-1/5"/>
                    <p className="basis-1/5 mt-20">Haghartsin</p>
                </div>
                <div className="flex flex-row justify-center space-x-36">
                    <img src="https://utfs.io/f/QI8sw9xDXLhGjHJqrUzpOS3rA9TEpVRlYJbcxtInX4UwgN1i"
                         className="w-auto h-[302px] border-black border-double border-4" alt="gyumri wall"/>
                    <img src="https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"
                         className="w-auto h-[302px] border-black border-double border-4" alt="gyumri city"/>
                </div>
            </div>
        </>
    )
}