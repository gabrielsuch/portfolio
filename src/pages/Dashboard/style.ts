import styled from "styled-components"

export const Container = styled.div `
    width: 100%;
    /* height: 100vh; */
    display: flex;
    /* flex-direction: row; */
    /* background-image: linear-gradient(60deg, var(--color-brown-100), var(--color-brown-50)); */
    background-color: #191719;
    /* background-image: url("https://img.olhardigital.com.br/wp-content/uploads/2021/04/Terra-1000x450.jpg"); */
    /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlL2Rfi7OK7c7e7KZaZkeW2cw1ckIiI033Nw&usqp=CAU"); */
    /* background-size: 100% 100%;
    background-repeat: no-repeat; */

    @media (max-width: 450px) {
        flex-direction: column;
    }

    @media (min-width: 450px) {
        flex-direction: row;
    }

`

export const InfoBox = styled.div `
    width: 100%;
    height: 100vh;
`