import {Container, InfoBox} from "./style"
import Header from "../../components/Header/index"
import SideHeader from "../../components/SideHeader/index"

import About from "../../components/About/index"
// import AboutAndContact from "../../components/AboutAndContact/index"
import Home from "../../components/Home/index"
import Experiences from "../../components/Experiences/index"
import Projects from "../../components/Projects/index"

import {useOptionContext} from "../../providers/Context/index"


const Dashboard = () => {

    const {selectedOption} = useOptionContext()

    return (
        <Container>
            <SideHeader/>
            <Header/>
              
            <InfoBox>
                {
                    selectedOption === "Home" ?
                    <Home/>
                    :
                    selectedOption === "About" ?
                    <About/>
                    :
                    selectedOption === "Experiences" ?
                    <Experiences/>
                    :
                    selectedOption === "Projects" &&
                    <Projects/>
                }
            </InfoBox>
        </Container>
    )
}

export default Dashboard