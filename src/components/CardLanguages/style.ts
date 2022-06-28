import styled from "styled-components"


export const Container = styled.div `
    img {
        width: 80px;
        height: 80px;
        padding: 0px 10px;
        transition: 1s;
        /* background-color: green; */
        /* animation-name: spin;
        animation-duration: 7s;
        animation-timing-function: linear;
        animation-iteration-count: infinite; */

        :hover {
            transform: scale(1.3);
        }
    }

    /* @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    } */
`