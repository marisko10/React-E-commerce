import "./Header.css";
import { Link } from "react-router-dom";
import car from "../../Images/oney_WEBSITE_IKEA_Icons_icon_-_sustentavel1.png";
import logo from "../../Images/icone-simples-de-smartphone-preto-e-branco_1292509-15137(1).jpg";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Header() {

    const {total, quantity} = useContext(CartContext);

    const [open, setOpen] = useState(false);

  function toggleCart() {
    setOpen(!open);
}


    return(
        <>
        <header className="header"> 
            <div className="headerlogo">
                <img src={logo} alt="logo" className="logo" width={44} />
                <h1 className="headerTitle">TechMobile</h1>
            </div>
            <nav className="headerNav">
                <Link to="/">Home</Link>
                <Link to="/nexus-carbon">Nexus Carbon</Link>
                <Link to="/nexus-titanium">Nexus Titanium</Link>
           </nav>
           <div className="cart-icon-container">
              <img
                 src={car}
                 alt="cart"
                 className="iconecar"
                 width={40}
                 onClick={toggleCart}
                />
                <p className="quantity">{quantity > 0 && quantity}</p>
                </div>
            </header>
            {open && <Cart />}
        </>
    )
}
export default Header;