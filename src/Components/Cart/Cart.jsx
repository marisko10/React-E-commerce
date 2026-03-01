import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="cartempty">O carrinho está vazio</h2>;
  }

  return (
    <div className="cart-container">
      <h3 className="cartsummary">Cart Summary</h3>
      {cart.map((item) => (
        <div key={item.cartId} className="cart-item">
          <h3>{item.title}</h3>
          <p className="price">€{item.price}</p>

          <button className="btnremove" onClick={() => removeFromCart(item.cartId)}>
            Remover
          </button>
        </div>
      ))}
         <div>
          <p className="total-price">Total € {total}</p>

      <button className="clear-btn" onClick={clearCart}>
        Limpar Carrinho
      </button>
        </div>
    </div>
  );
}

export default Cart;