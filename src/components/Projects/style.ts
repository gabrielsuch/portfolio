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