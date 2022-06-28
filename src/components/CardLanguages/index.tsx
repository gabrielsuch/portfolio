import {Container} from "./style"

interface Language {
    img: string
    alt: string
}

interface LanguageProps {
    language: Language
}


const CardLanguages = ({language}: LanguageProps) => {

    return (
        <Container>
            <img src={language.img} alt={language.alt} />
        </Container>
    )
}

export default CardLanguages