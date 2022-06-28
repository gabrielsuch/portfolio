import {Container, Logo, Options, Developer} from "./style"
import {useOptionContext} from "../../providers/Context/index"


const Header = () => {

    const {changeOption} = useOptionContext()

    return (
        <Container>
            <Logo>
                <a href="https://github.com/gabrielsuch" target="_blank">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
            </Logo>
            <Options>
                <ul>
                    <li onClick={() => changeOption("Home")}><span>Home</span></li>
                    <li onClick={() => changeOption("About")}><span>About</span></li>
                    <li onClick={() => changeOption("Experiences")}><span>Experiences</span></li>
                    <li onClick={() => changeOption("Projects")}><span>Projects</span></li>
                    {/* <li onClick={() => changeOption("Socials")}><span>Socials</span></li> */}
                </ul>
            </Options>
            <Developer>
                <a href="https://github.com/gabrielsuch" target="_blank">
                    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github Logo"/>
                </a>
                <a href="https://www.linkedin.com/in/gabriel-such-5a8881231/" target="_blank">
                    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Logo"/>
                </a>
            </Developer>
        </Container>
    )
}

export default Header