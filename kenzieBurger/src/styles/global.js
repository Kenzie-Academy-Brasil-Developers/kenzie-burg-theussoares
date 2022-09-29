import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


    :root{
        --primary: #27AE60;
        --primary50: #93D7AF;
        --secundary: #EB5757;

        --gray1: #333333;
        --gray2: #828282;
        --gray3: #E0E0E0;
        --gray4: #F5F5F5;

        --red: #E60000;
        --yallow: #FFCD07;
        --green: #168821;
        --blue: #155BCB;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        list-style: none;
    }

    img{
        width: 100%;
        max-width: 117px;
    }
`
export default GlobalStyle