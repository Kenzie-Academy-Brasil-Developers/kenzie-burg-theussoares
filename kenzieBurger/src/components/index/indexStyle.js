import styled from "styled-components";


export const Div = styled.div`

    width: 100%;
    max-width: 1600px;

    display: flex;
    flex-direction: column;
    gap: 36px;

    margin: 0 auto;
    padding: 10px;`

export const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 645px){
        flex-direction: column;
        margin: 0 auto;
        gap: 10px;
        padding-top: 10px;
    }

    form{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        max-width: 300px;

        @media (max-width: 645px){
            width: 100%;
        }

        padding: 10px;

        border: 2px solid var(--gray3);
        border-radius: 8px;

        input{
            max-width: 120px;

            @media (max-width: 645px){
                width: 380px;
            }
            
            border: none;

            color: var(--gray3);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
        }

        input:focus{
            outline: none;
            color: var(--gray2)
        }

        button{
            width: 100px;
            height: 30px;

            background-color: var(--primary);
            color: #FFFFFF;

            border: 2px solid var(--primary);
            border-radius: 8px;

            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
        }

        button:hover{
            filter: brightness(0.9);
            cursor: pointer;
        }
    }
    form:hover{
        border: 2px solid var(--gray1);
    }
`