import MetaTags from "../Components/MetaTags.tsx";
import {Navbar} from "../Components/Navbar.tsx";
import {Link} from 'react-router-dom';

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
                <img className="w-20 h-20 ml-[50%] translate-x-[-50%] mb-4 border-black border-double border-4" src="https://utfs.io/f/QI8sw9xDXLhGwi2l69SRX6DVsvJiC2qWgOU98GMQjlmH1BrL" alt="globe"/>
                <h1>Areg travels</h1>
                <p className="text-xs mt-4">Welcome to Areg travels! Here you can explore flights and tours with Areg!</p>
                <div className="flex flex-col md:flex-row mb-16 md:mb-0">
                    <div className="basis-1/3 mt-16">
                        <p>Tours starting at 50$!!!</p>
                        <Link to="/Tours">
                            <button
                                className="button leading-loose text-sm border-2 border-black w-32 border-double mt-3 hover:scale-110 active:scale-90">Click
                                here!!!
                            </button>
                        </Link>
                    </div>
                    <div className="basis-1/3 mt-16">
                        <p>Flights starting at 80$!!!</p>
                        <Link to="/Flights">
                            <button
                                className="button leading-loose text-sm border-2 border-black w-32 border-double mt-3 hover:scale-110 active:scale-90">Click
                                here!!!
                            </button>
                        </Link>
                    </div>
                    <div className="basis-1/3 mt-16">
                        <p>Contact Us here!!!</p>
                        <Link to="/Contact-Us">
                            <button
                                className="button leading-loose text-sm border-2 border-black w-32 border-double mt-3 hover:scale-110 active:scale-90">Click
                                here!!!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
