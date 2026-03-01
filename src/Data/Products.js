import phoneblack from "../Images/phone-black.png";  
import phonesilver from "../images/phone-silver.png";

const Products = [
    {
    id: 1,
       title: "Nexus X1 Carbon",
       price: 999.00,
       apresentation: "Poder em estado puro",
       image: phoneblack,
       description: "O Nexus X1 Carbon redefine o que é possível num smartphone. Com acabamento em preto  matte e estrutura em fibra de carbono, é leve, resistente e incrivelmente rápido",
       attributes: {
          tela: '6.8" OLED 120Hz',
          camera: '200MP Main / 8k Video',
          processador: 'Quantum Snapdragon 9',
          bateria: '5000mAh',
    },
  },
  
  {
    id: 2,
       title: "Nexus X1 Titanium",
       price: 1099.00,
       apresentation: "Elegância redefinida.",
       image: phonesilver,
       description: "O Nexus X1 Titanium redefine o que é possível num smartphone. Com acabamento em titânioConstruído em titânio de grau aeroespacial, o Nexus X1 Titanium combina durabilidade extrema com um design sofisticado. A escolha perfeita para quem não aceita compromissos. e estrutura em fibra de carbono, é leve, resistente e incrivelmente rápido",
       attributes: {
          tela: '6.8" OLED 144Hz',
          camera: '200MP Pro / 8k Video',
          processador: 'Quantum Snapdragon 9 Pro',
          bateria: '5200mAh',
    },
  }, 
];

    export default Products;