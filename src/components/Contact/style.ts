import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Form = styled.form `
    max-width: 550px;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    background-color: #313131;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const InputLine = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .fix {
        max-width: 230px;
        width: 100%;
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
            height: 40px;
            margin: 5px 0px;
            padding: 0px 5px;
            border-top-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        @media (max-width: 750px) {
            max-width: 500px;
            width: 100%;
        }
    }

`

export const ErrorMessage = styled.p `
    color: red;
`

export const TextAreaLine = styled.div `
    width: 100%;

    textarea {
        width: 100%;
        margin: 10px 0px;
        padding: 10px;
        resize: none;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`

export const SendButton = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
        background-image: linear-gradient(to right, #6557D9, #595DFA);
        color: white;
        max-width: 150px;
        width: 100%;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        font-size: 1.1rem;
        font-family: 'Kdam Thmor Pro', sans-serif;
    }
`