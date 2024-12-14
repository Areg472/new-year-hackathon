import {Navbar} from "../Components/Navbar.tsx";
import MetaTags from "../Components/MetaTags.tsx";

export function ContactUs() {
    return(
        <>
            <MetaTags
                title='Areg travels - Contact Us'
                description='My website for codedex hackathon. The form is functioning btw!'
                image='https://utfs.io/f/QI8sw9xDXLhGwi2l69SRX6DVsvJiC2qWgOU98GMQjlmH1BrL'
                name='Areg travels'
            />
            <Navbar/>
            <div className="mt-10">
                <p className="mb-10 mt-4">Contact Aregs Tours!</p>
                <form action="https://submit-form.com/NmxCgJpJV" className="form">
                    <label htmlFor="name" className="">Name</label><br/>
                    <input type="text" id="name" name="name" placeholder="Name" className="border-double border-4 mb-4 w-80"
                           required={true}/><br/>
                    <label htmlFor="email" className="">Email</label><br/>
                    <input type="email" id="email" name="email" placeholder="Email" className="border-double border-4 mb-4 w-80"
                           required={true}/><br/>
                    <label htmlFor="message" className="">Message</label><br/>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="border-double border-4 max-h-52 min-h-16 mb-4 w-80 h-28"
                        required={true}
                    ></textarea><br/>
                    <button type="submit" className="border-double border-4 w-24 hover:scale-110 active:scale-90">Send</button>
                </form>
            </div>
        </>
    )
}