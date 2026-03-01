import Card from "../../Components/Card/Card";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import  Products  from "../../Data/Products";



function NexusCarbon() {
   const product = Products.find((item) => item.id === 1);

    return (
        <div>
            <Card product={product}
            />
        </div>
    );
}

export default NexusCarbon;