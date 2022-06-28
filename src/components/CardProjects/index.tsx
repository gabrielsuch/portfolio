import {Container, LogoBox, Content, Links} from "./style"


interface Project {
    img: string
    alt: string
    content: string
    github: string
    vercel: string
}

interface ProjectProps {
    project: Project
}


const CardProjects = ({project}: ProjectProps) => {

    return (
        <Container>
            <LogoBox>
                <a href={project.vercel} target="_blank">
                    <img src={project.img} alt={project.alt} />
                </a>
            </LogoBox>
            <Content>
                <p>{project.content}</p>
            </Content>
            <Links>
                <div className="container">
                    <a href={project.github} target="_blank">
                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github Logo"/>
                    </a>
                    <a href={project.vercel} target="_blank">
                        <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="LinkedIn Logo"/>
                    </a>
                </div>
            </Links>
        </Container>
    )
}

export default CardProjects