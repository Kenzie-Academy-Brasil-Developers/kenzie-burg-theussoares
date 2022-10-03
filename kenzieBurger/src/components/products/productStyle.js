import styled from "styled-components";

export const Main = styled.main`

    .listProducts > ul::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    } 
    
    .listProducts > ul::-webkit-scrollbar-thumb {   
        background-color: var(--primary);
        border-radius: 8px;
    }

    display: flex;
    width: 100%;

    @media (max-width: 645px){
        flex-direction: column;
        gap: 10px;
    }

    .pesquisa{
        display: flex;
        justify-content: space-between;
    }

    .listProducts > ul{
        margin-top: 30px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        @media (max-width: 645px){
            flex-wrap: nowrap;
            overflow-x: scroll;
            height: 430px;
            padding-top: 40px;
            padding-left: 20px;
        }

        li{
            width: 100%;
            max-width: 250px;
            max-height: 100%;

            display: flex;
            flex-direction: column;
            text-align: left;
            gap: 15px;
            padding: 10px;

            background-color: var(--gray6);
            
            @media (max-width: 645px){
                min-width: 280px;
                max-width: 280px;
                height: 100%;
                max-height: 350px;
                gap: 20px;
                padding: 15px;
            }

            div{
                display: flex;
                justify-content: center;
                align-items: center;
            }

            border: 2px solid var(--gray3);
            border-radius: 5px;

            button{
                width: 100%;
                max-width: 106px;
                height: 40px;

                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;

                color: #FFFFFFFF;
                background-color: var(--primary);

                border: 2px solid var(--primary);
                border-radius: 8px;
            }

            h3{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 1.4rem;

                color: var(--gray1);
            }

            .category{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 0.8rem;
                
                color: var(--gray2);
            }

            .price{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 1rem;
                
                color: var(--primary);
            }
        }

        li:hover{
            scale: 1.1;
            button{
                scale: 1.1;
            }
        }
        
        li{
            button:hover{
                cursor: pointer;
                background: var(--primary50);
                border-color: var(--primary50);
            }
        }
    }

    section > div {
        display: flex;
        flex-direction: column;

        .info{
            margin-top: 20px;
        }
                
        width: 300px;

        @media (max-width: 645px){
                width: 90%;
                margin: 0 auto;
            }

        .cartTitle{
            display: flex;
            align-items: center;
            justify-content: center;

            background-color: var(--primary);
            border-radius: 5px 5px 0px 0px;

            height: 65px;

            h2{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 1.3rem;

                color: #FFFFFFFF;
            }
        }

    }
`