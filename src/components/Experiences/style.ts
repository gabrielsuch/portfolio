import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const BoxLanguages = styled.div `
    max-width: 500px;
    width: 100%;
    height: 515px;
    margin: 10px;
    padding: 5px;
    border-radius: 15px;
    box-shadow: 1px 1px 5px black;
    background-color: #131313;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div `
    text-align: center;
    color: white;
    margin: 15px;
    
    span {
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-size: 2rem;
        border-top: 2px solid white;
    }
`

export const ContainerLanguages = styled.div `
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
    columns: 2;
    text-align: center;
`