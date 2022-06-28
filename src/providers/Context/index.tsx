import {createContext, useContext, ReactNode, useState} from "react"


interface ChildrenProps {
    children: ReactNode
}

interface ContextData {
    selectedOption: string
    changeOption: (option: string) => void
    front: Languages[]
    back: Languages[],
}

interface Languages {
    img: string
    alt: string
}

const OptionContext = createContext<ContextData>({} as ContextData)

export const OptionProvider = ({children}: ChildrenProps) => {
    
    const [selectedOption, setSelectedOption] = useState<string>("Home")

    const [front, setFront] = useState<Languages[]>([
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5 Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3 Logo",},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "GIT Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux Logo"}
    ] as Languages[])

    const [back, setBack] = useState<Languages[]>([
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg", alt: "Flask SQLAlchemy Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "NodeJS Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker Logo"},
        {img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL Logo"}
    ] as Languages[])

    const changeOption = (option: string) => {
        setSelectedOption(option)
    }

    return (
        <OptionContext.Provider value={{selectedOption, changeOption, front, back}}>
            {children}
        </OptionContext.Provider>
    )
}

export const useOptionContext = () => useContext(OptionContext)