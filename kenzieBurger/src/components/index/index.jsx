import { useEffect, useState } from "react";
import { Div, StyledHeader } from "./indexStyle";
import logo from '../../assets/logo.svg'



function ProductList(){
    const [productList, setList] = useState([])

    useEffect(()=>{

    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then((json => {
        setList(json)
    }))
    },[])

    return (
        <Div>
            <StyledHeader>
                <img src={logo} alt="" />
                <form>
                    <input type="text" placeholder="Digitar Pesquisa"/>
                    <button type="submit">Pesquisar</button>
                </form>
            </StyledHeader>
        </Div>
    )
}

export default ProductList