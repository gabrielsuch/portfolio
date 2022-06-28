import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding-bottom: 20px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px white;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #313131;
        border-radius: 10px;
    }
`

export const Title = styled.div `
    width: 100%;
    margin-top: 10px;
    text-align: center;
    
    span {
        color: white;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-size: 2rem;
        border-top: 2px solid white;
    }
`