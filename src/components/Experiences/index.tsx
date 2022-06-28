import {Container, BoxLanguages, Title, ContainerLanguages} from "./style"
import {useOptionContext} from "../../providers/Context"

import CardLanguages from "../CardLanguages/index"


interface Language {
    img: string
    alt: string
}


const Experiences = () => {

    const {front, back} = useOptionContext()

    return (
        <Container>
            <BoxLanguages>
                <Title>
                    <span>Front-end</span>
                </Title>
                <ContainerLanguages>
                    {
                        front.map((language: Language) => (
                            <CardLanguages key={language.alt} language={language}/>
                        ))
                    }
                </ContainerLanguages>
            </BoxLanguages>
            <BoxLanguages>
                <Title>
                    <span>Back-end</span>
                </Title>
                <ContainerLanguages>
                    {
                        back.map((language: Language) => (
                            <CardLanguages key={language.alt} language={language}/>
                        ))
                    }
                </ContainerLanguages>
            </BoxLanguages>
        </Container>
    )
}


export default Experiences