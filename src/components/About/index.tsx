import {Container, ContainerInfo, InfoBox, InfoAbout, Languages} from "./style"
import {useOptionContext} from "../../providers/Context/index"

import CardLanguages from "../CardLanguages/index"


const About = () => {

    const {front, back} = useOptionContext()

    return (
        <Container>
            <ContainerInfo>
                <InfoBox>
                    <h1>Olá, <br/> 
                        sou o <span>Gabriel Such,</span> <br/>
                        um Desenvolvedor Full-Stack
                    </h1>
                </InfoBox>
                <InfoAbout>
                    <p>Procurando sempre a perfeição e o conhecimento de novas tecnologias.</p>
                </InfoAbout>
            </ContainerInfo>
            <Languages>
                {
                    front.map((language) => (
                        <CardLanguages key={language.alt} language={language}/>    
                    ))
                }   
                {
                    back.map((language) => (
                        <CardLanguages key={language.alt} language={language}/>    
                    ))
                }
            </Languages>
        </Container>
    )
}


export default About