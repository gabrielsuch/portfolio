import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    /* height: 70vh; */
    overflow: auto;

    /* ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px white;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #313131;
        border-radius: 10px;
    } */
`

export const ContainerInfo = styled.div `
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #1C1B1F;
`

export const InfoBox = styled.div `
    max-width: 365px;
    width: 100%;
    padding: 15px;
    font-family: 'Kdam Thmor Pro', sans-serif;
    font-style: italic;
    color: white;
    
    h1 {
        font-size: 1.7rem;
    }

    h1 span {
        color: #595DFA;
    }
`

export const InfoAbout = styled.div `
    max-width: 365px;
    width: 100%;
    padding: 15px;
    font-size: 1.4rem;
    font-family: 'Kdam Thmor Pro', sans-serif;
    font-style: italic;
    color: white;

    p {
        width: 100%;
    }
`

export const Languages = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    bottom: 40px;
`