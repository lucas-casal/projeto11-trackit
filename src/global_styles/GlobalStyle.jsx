import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
   body {
    width: 100vw;
    height: 100vh;
    display: block;
    background-color: blue;
    
   }

   #root{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
   }
`



export default GlobalStyle;