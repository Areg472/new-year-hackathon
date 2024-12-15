import MetaTags from "../Components/MetaTags.tsx";
import {Navbar} from "../Components/Navbar.tsx";

export function Hmm() {
    return (
        <>
            <MetaTags
                title='Letter to codedex'
                description='wwat?!'
                image='https://utfs.io/f/QI8sw9xDXLhGwi2l69SRX6DVsvJiC2qWgOU98GMQjlmH1BrL'
                name='Areg travels'
            />
            <Navbar/>
            <div className="flex flex-col mt-10 mb-16">
                Unsure...
                <br/>
                Well, final days of hackathon
                <br/>
                This is something that has changed my coding experience, it introduced me to more social coding, taking feedback from other and liking others projects.
                <br/>
                Tho it did make me extremely anxious, thinking about winning or losing, I'm glad I did it.
                <br/>
                This website will stay here for the foreseeable future!
                <br/>
                Thanks Eric, Sonny, and everyone who participated!
            </div>
        </>
    )
}