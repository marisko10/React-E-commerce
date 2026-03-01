import Card from "../../Components/Card/Card";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import  Products  from "../../Data/Products";



function NexusTitanium() {
   const {addToCart} = useContext(CartContext);
   const product = Products.find((item) => item.id === 2);

    return (
        <div>
            <Card product={product}
             addToCart={addToCart} />
        </div>
    );
}

export default NexusTitanium;