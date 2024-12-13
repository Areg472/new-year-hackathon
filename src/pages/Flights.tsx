import {Navbar} from "../Components/Navbar.tsx";
import MetaTags from "../Components/MetaTags.tsx";

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
        </>
    )
}