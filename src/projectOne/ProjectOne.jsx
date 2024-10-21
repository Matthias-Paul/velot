import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import Services from "./Services.jsx"
import Projects from "./Projects.jsx"
import Testimonial from "./Testimonial.jsx"
import Contact from "./Contact.jsx"
import Footer from "./Footer.jsx"

import {useState} from "react"
export default function ProjectOne(){

const [isVisible, setIsVisible] = useState(false);

return(
<>
<Header isVisible={isVisible} setIsVisible={setIsVisible}  />
<Hero isVisible={isVisible} />
<Services />
<Projects />

<Contact />
<Testimonial />
<Footer />
</>
)

}