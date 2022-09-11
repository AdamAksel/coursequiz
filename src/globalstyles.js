import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0; 
    font-family: 'Lato', sans-serif; 

}

body {
        background-color: white;
        color: #141c3a;
    }


    button {
        background-color: white;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
}

a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */

  &:hover{
    color:lightblue;
  }
}





`
