import {Container, Title} from "./style"

import About from "../About/index"
import Projects from "../Projects/index"
import Contact from "../Contact/index"


const Home = () => {
    return (
        <Container>
            <About/>

            <Title>
                <span>Projects</span>
            </Title>
            <Projects/>

            {/* <Title>
                <span>Contact</span>
            </Title> */}
            {/* <Contact/> */}
        </Container>
    )
}


export default Home