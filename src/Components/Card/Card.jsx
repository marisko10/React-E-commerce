import "./card.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Card({ product }) {
    const { addToCart } = useContext(CartContext);



    return (
        <>
        <main className="card">
            <div className="card-left">
                <img src={product.image} alt="phone" className="phone" width={600}/>
            </div>
            <div className="card-right">
                <div className="card-right-content">
                <h2 className="phonename">{product.title}</h2>
                <p className="phone-apresentation">{product.apresentation}</p>
                <p className="phone-price">€{product.price}</p>
                <p className="phone-description">{product.description}</p>
               </div>
               <div className="atribute">
                  <div className="atribute-left">
                      <h3 className="atribute-title">Tela</h3>
                      <p className="atribute-description">{product.attributes.tela}</p>
                      <h3 className="atribute-title">Camera</h3>
                      <p className="atribute-description">{product.attributes.camera}</p>
                  </div>
                    <div className="atribute-right">
                      <h3 className="atribute-title">Processador</h3>
                      <p className="atribute-description">{product.attributes.processador}</p>
                      <h3 className="atribute-title">Bateria</h3>
                      <p className="atribute-description">{product.attributes.bateria}</p>
                  </div>
                </div>
                <button className="buy-button" onClick={ () => addToCart(product)}>Adicionar ao Carrinho</button>
            </div>
            
         
            
        </main>
        </>
        )
}

export default Card;