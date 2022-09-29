import styled from "styled-components";

export const Main = styled.main`

    display: flex;
    width: 100%;

    section > ul{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        li{
            width: 100%;
            max-width: 250px;
            height: 100%;

            display: flex;
            flex-direction: column;
            text-align: left;
            gap: 15px;
            padding: 10px;

            background-color: var(--gray6);

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
            border-color: var(--gray1);
            button{
                cursor: pointer;
                background: var(--primary50);
                border-color: var(--primary50);
            }
        }
    }

    section > div {
        display: flex;
        flex-direction: column;
        
        width: 300px;

        

        div:nth-child(1){
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

        div:nth-child(2){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 158px;

            p:nth-child(1){
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 1rem;

                color: var(--gray1);
            }

            p:nth-child(2){
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 0.9rem;

                color: var(--gray2);
            }
        }
    }
`