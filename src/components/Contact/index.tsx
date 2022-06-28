import {Container, Form, InputLine, ErrorMessage, TextAreaLine, SendButton} from "./style"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"


interface MessageProps {
    name: string
    email: string
    message: string
}


const Contact = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email(),
        message: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, formState: {errors}} = useForm<MessageProps>({
        resolver: yupResolver(schema)
    })

    const onSubmit = () => {
        console.log("Enviou")
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputLine>
                    <div className="fix">
                        <input type="text" placeholder="Nome*" id="name" {...register("name")}/>
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    </div>
                    <div className="fix">
                        <input type="text" placeholder="Email*" id="email" {...register("email")}/>
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    </div>
                </InputLine>
                <TextAreaLine>
                    <textarea rows={7} placeholder="Insira sua mensagem..." id="message" {...register("message")}></textarea>
                    <ErrorMessage>{errors.message?.message}</ErrorMessage>
                </TextAreaLine>
                <SendButton>
                    <button type="submit">Enviar</button>
                </SendButton>
            </Form>
        </Container>
    )
}

export default Contact  