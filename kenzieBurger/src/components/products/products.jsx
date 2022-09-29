
export function CreateProductList({produtos}){


    return(
        <>
            {produtos.map(produto => 
                <li key={produto.id}>
                    <div>
                        <img src={produto.img} alt={produto.name} />
                    </div>
                    <h3>{produto.name}</h3>
                    <p className="category">{produto.category}</p>
                    <p className="price">{`R$ ${Number. isInteger(produto.price) ? produto.price + '.00' : produto.price}`}</p>
                    <button>Adicionar</button>
                </li>
            )}
        </>
    )
}