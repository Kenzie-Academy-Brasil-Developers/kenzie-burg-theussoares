import { useEffect, useState } from "react";
import { Div, StyledHeader } from "./indexStyle";
import logo from '../../assets/logo.svg'
import { CreateProductList } from '../products/products'
import { Main } from '../products/productStyle'
import { Cart } from '../carrinho/cart'



function ProductList(){
    const [productList, setList] = useState([])
    const [pesquisa, setPesquisa] = useState('')
    const [filtro, setFiltro] = useState([])
    const [carrinho, setCarrinho] = useState([])

    useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then((json => {
        setList(json)
    }))
    },[pesquisa, carrinho])


    function busca(e){
        e.preventDefault()
        const resultadoBusca = productList.filter((produto)=>{
            produto.name.toLowerCase() === pesquisa.toLowerCase()
        })
        setFiltro(resultadoBusca)
    }

    function addCart(produtoClicado){
        const produto = {
            id: produtoClicado.id,
            img: produtoClicado.img,
            nome: produtoClicado.name,
            categoria: produtoClicado.category,
            preco: produtoClicado.price
        }
        setCarrinho([...carrinho, produto])
        Cart(carrinho)
    }

    function removerTodos(){
        setCarrinho([])
    }

    function removerEspecifico(id){
        const newCarrinho = carrinho.filter(item => item.id !== id)
        setCarrinho(newCarrinho)
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
                <section className="listProducts">
                { pesquisa.length ? 
                <div className="pesquisa">
                    <h2>Resultado para: <span>{pesquisa}</span></h2>  
                    <button>Limpar busca</button>              
                </div> : false}
                    <ul>
                        <CreateProductList produtos={productList} addCart={addCart}/>
                    </ul>
                </section>
                <section>
                    <div>
                        <div className="cartTitle">
                            <h2>Carrinho de compras</h2>
                        </div>
                        <div>
                            {
                            carrinho.length === 0 ? 
                                <div className="info">
                                    <p>Sua sacola está vazia</p>
                                    <p>Adicione itens</p>
                                </div>
                            :
                                <Cart 
                                    produtos={carrinho}
                                    remove={removerTodos}
                                    removeOne={removerEspecifico}
                                />
                            }
                        </div>
                    </div>
                    
                </section>
            </Main>
        </Div>
    )
}

export default ProductList