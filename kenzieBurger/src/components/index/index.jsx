import { useEffect, useState } from "react";
import { Div, StyledHeader } from "./indexStyle";
import logo from '../../assets/logo.svg'
import { CreateProductList } from '../products/products'
import { Main } from '../products/productStyle'



function ProductList(){
    const [productList, setList] = useState([])
    const [pesquisa, setPesquisa] = useState('')
    const [filtro, setFiltro] = useState([])

    useEffect(()=>{

    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then((json => {
        setList(json)
    }))
    },[pesquisa])


    function busca(e){
        e.preventDefault()
        const resultadoBusca = productList.filter((produto)=>{
             produto.name.toLowerCase() === pesquisa.toLowerCase()
        })
        console.log(resultadoBusca)
    }

    return (
        <Div>
            <StyledHeader>
                <img src={logo} alt="" />
                <form onSubmit={busca}>
                    <input onChange={(event) => setPesquisa(event.target.value)} type="text" placeholder="Digitar Pesquisa"/>
                    <button type="submit">Pesquisar</button>
                </form>
            </StyledHeader>
            <Main>
                <section>
                { pesquisa.length ? 
                <div className="pesquisa">
                    <h2>Resultado para: {pesquisa}</h2>  
                    <button>Limpar busca</button>              
                </div> : false}
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