import { useState } from 'react'
import { Card, Total, Ul } from './style'

export function Cart( {produtos, remove, removeOne} ){

    return(
        <>
        <Ul>
            {  produtos && 
                produtos.map(produto =>
                    <Card key={produto.id}>
                        <div>
                            <img src={produto.img} alt={produto.nome} />
                            <div>
                                <h4>{produto.nome}</h4>
                                <p>{produto.categoria}</p>
                             </div>
                        </div>
                        <button onClick={()=> removeOne(produto.id)}>Remover</button>
                    </Card>
                )
            }
        </Ul>
            <Total>
            <div>
                <h4>Total</h4>
                <p>R$ {produtos.reduce((previousValue, currentValue) => {
                let soma = currentValue.preco + previousValue;
                let arredondar = parseFloat(soma.toFixed(2))
               return arredondar
            }, 0)}</p>
            </div>
            <button onClick={remove}>Remover todos</button>
        </Total>
    </>
    )
}