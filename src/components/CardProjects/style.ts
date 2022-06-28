import styled from "styled-components"


export const Container = styled.div `
    max-width: 400px;
    width: 100%;
    height: 470px;
    background-image: linear-gradient(to top, #131313, #313131);
    padding: 5px;
    margin: 20px 5px;
    border-radius: 15px;
    box-shadow: 1px 1px 15px black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 1s;
    animation-name: slide;
    animation-duration: 1s;

    :hover {
        transform: scale(1.1);
    }


    @keyframes slide {
        from {
            transform: translateX(10%);
        }
        to {
            transform: translateX(0%);
        }
    }
`


export const LogoBox = styled.div `
    width: 100%;
    text-align: center;
    padding: 5px;
    border-radius: 15px;

    a img {
        width: 100%;
        height: 215px;
        border-radius: 8px;
        object-fit: cover;
        cursor: pointer;
    }
`

export const Content = styled.div `
    font-family: 'Kdam Thmor Pro', sans-serif;

    p {
        color: white;
        padding: 5px;
    }
`

export const Links = styled.div `
    width: 100%;
    margin-bottom: 5px;
    
    .container {
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        a {
            margin: 5px;
            line-height: 0px;
            padding: 3px;
            border: 2px solid white;
            border-radius: 10px;
            transition: 1s;
            box-shadow: 1px 1px 5px white;

            :hover {
                transform: scale(1.1);
                background-color: white;
            }
        } 

        img {
            width: 110px;
            height: 40px;
            line-height: 40px;
            padding: 5px 0px;
            object-fit: cover;
        }
    }
`