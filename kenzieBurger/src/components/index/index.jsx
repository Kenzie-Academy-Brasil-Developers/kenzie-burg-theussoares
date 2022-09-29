import { useEffect, useState } from "react";
import { Div, StyledHeader } from "./indexStyle";
import logo from '../../assets/logo.svg'
import { CreateProductList } from '../products/products'
import { Main } from '../products/productStyle'



function ProductList(){
    const [productList, setList] = useState([])

    useEffect(()=>{

    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then((json => {
        setList(json)
        console.log(json)
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
            <Main>
                <section>
                    <ul>
                        <CreateProductList produtos={productList}/>
                    </ul>
                </section>
                <section>
                    <div>
                        <div>
                            <h2>Carrinho de compras</h2>
                        </div>
                        <div>
                            <p>Sua sacola está vazia</p>
                            <p>Adicione itens</p>
                        </div>
                    </div>
                    
                </section>
            </Main>
        </Div>
    )
}

export default ProductList