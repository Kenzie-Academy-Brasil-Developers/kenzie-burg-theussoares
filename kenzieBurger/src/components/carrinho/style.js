import styled from "styled-components";

export const Card = styled.li`

    max-height: 80px;
    width: 300px;
    width: 100%;

    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

        div{
            display: flex;
            gap: 5px;
            min-height: 158px;
            text-align: justify;
            align-items: flex-start;

                img{
                    max-width: 70px;
                    width: 100%;
                    background-color: var(--gray3);
                }
    
                div{
                    display: flex;
                    flex-direction: column;
                    min-height: 158px;
                    text-align: justify;
                    padding-top: 10px;


                        h4{
                            font-family: 'Inter';
                            font-style: normal;
                            font-weight: 700;
                            font-size: 1rem;

                            margin-bottom: 5px;

                            color: var(--gray1);
                        }

                        p{
                            font-family: 'Inter';
                            font-style: normal;
                            font-weight: 400;
                            font-size: 0.9rem;

                            color: var(--gray2);
                        }
                }
                
        }

        button{
            border: none;
            background-color: transparent;
            color: var(--gray2);

            padding-top: 10px;
        }

`

export const Ul = styled.ul`    

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    } 
    
    ::-webkit-scrollbar-thumb {   
        background-color: var(--primary);
        border-radius: 8px;
    }
    width: 300px;
    width: 100%;
    height: 240px;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Total = styled.div`

    max-height: 122px;
    width: 300px;
    width: 100%;
    padding: 20px;

    box-shadow: 0px -4px 5px 0px var(--gray2);
    -webkit-box-shadow: 0px -4px 5px 0px var(--gray3);
    -moz-box-shadow: 0px -4px 5px 0px var(--gray3);

    display: flex;
    flex-direction: column;

        div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        button{
            height: 60px;
            width: 300px;
            width: 100%;

            border-radius: 8px;
            border: none;
            padding: 0px 20px 0px 20px;

            background-color: var(--gray3);
            color: var(--gray2);

            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 0.9rem;
        }

        button:hover{
            cursor: pointer;
            transition: 0.5s;
            background-color: var(--gray2);
            color: var(--gray3);
        }
`