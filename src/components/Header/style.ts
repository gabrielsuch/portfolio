import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    /* height: 100vh; */
    background-color: #131313;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (min-width: 450px) {
        display: none;
    }
`

export const Logo = styled.div `
    display: flex;
    align-items: center;
    
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: white;
    }
`

export const Options = styled.div `
    ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        list-style: none;
        font-family: 'Kdam Thmor Pro', sans-serif;
        font-size: 1.5rem;

        li {
            color: white;
            width: 100%;
            padding: 5px;
            text-align: center;
            cursor: pointer;
            transition: 1s;

            span {
                border-top: 2px solid white;
            }
        }

        li:hover {
            background-color: #313131;
            transition: 1s;
            transform: scale(1.1);
            color: #3B39DE;
            
            span {
                border-color: blue;
            }
        }
    }
`

export const Developer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0px 5px;
    margin: 10px 0px;

    a img {
        width: 110px;
        height: 40px;
        background-color: white;
        border-radius: 5px;
        padding: 5px;
        transition: 1s;

        :hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: 560px) {
        flex-wrap: wrap;

        a img {
            width: 120px;
            object-fit: cover;
        }
    }
`