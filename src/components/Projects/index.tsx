import {Container} from "./style"
import {useState} from "react"
import CardProjects from "../CardProjects/index"

import hamburgueria from "../../assets/hamburgueria.png"
import adm_de_eventos from "../../assets/adm_de_eventos.png"
import kenziehub from "../../assets/kenziehub.png"
import wedo from "../../assets/wedo.png"
import simple_budget from "../../assets/simple_budget.png"


const Projects = () => {

    const [projects, setProjects] = useState([
        {img: hamburgueria, alt: "Hamburgueria Project", content: "Projeto onde consiste o uso de Cadastro, Login e o usuário poder realizar compras em uma lanchonete.", github: "https://github.com/gabrielsuch/react-entrega-s5-hamburgueria-2-0-com-typescript-json-server-gabrielsuch", vercel: "https://react-entrega-s5-hamburgueria-2-0-com-typescript-jso-9ls73cnop.vercel.app/"},
        {img: wedo, alt: "WeDo Project", content: "Projeto onde seu objetivo é ter sua função similar à uma rede social, onde os usuários podem criar e entrar em grupos, publicar seus hábitos e atividades.", github: "https://github.com/gabrielsuch/wedo", vercel: "https://we-do.vercel.app/"},
        {img: kenziehub, alt: "KenzieHub Project", content: "Projeto com o propósito de dar ao usuário, o poder de cadastrar suas Tecnologias e Trabalhos a fazer, podendo removê-las a qualquer momento.", github: "https://github.com/gabrielsuch/react-entrega-s2-kenzie-hub-gabrielsuch", vercel: "https://react-entrega-s2-kenzie-hub-gabrielsuch.vercel.app/"},
        {img: adm_de_eventos, alt: "Administração de Eventos Project", content: "Projeto onde o usuário pode adicionar bebidas à sua lista, e escolher para qual tipo de festa as bebidas irão.", github: "https://github.com/gabrielsuch/react-entrega-s3-administracao-de-eventos-gabrielsuch", vercel: "https://react-entrega-s3-administracao-de-eventos-gabrielsuch.vercel.app/"},
        {img: simple_budget, alt: "Simple Budget Project", content: "Projeto que permite ao usuário, poder administrar seus orçamentos/despesas, podendo criar quanto irá gastar para o Trabalho, e com o que. Ex: Orçamento: Trabalho, Despesas: Alimentação, Passagem, etc.", github: "https://github.com/gabrielsuch/simple-budget/tree/develop/simple-budget", vercel: "https://simple-budget-andresmartins910.vercel.app/"}
    ])

    return (
        <Container>
            {
                projects.map((project) => (
                    <CardProjects key={project.alt} project={project}/>
                ))
            }
        </Container>
    )
}


export default Projects