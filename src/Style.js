import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Main = styled.main`
    background-color: #f9e1f5;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const H1 =styled.h1`
color: #584754;
`
export const Input = styled.input`
width: 30VW;
border: none;
border-radius: 20px;
padding:10px;
margin: 8px;

&::placeholder{
    color: #f3c3eb;
    text-align: center;
}
`

export const Btn = styled.button`
border: none;
padding: 10px 15px;
 color: #6f5269;
border-radius: 5px;
margin: 5px;
background-color: white;

&:hover{
    background-color:#e8e8e8 ;
    color: #6f5269;
    border: #6f5269 solid 1px;
}
`

export const Resultado = styled.h2`

border-radius: 50%;
padding: 10px;
color: #584754;
margin: 10px;
`