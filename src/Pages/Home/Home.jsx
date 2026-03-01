import { useState, useEffect } from "react";
import "./Home.css";
import heroPhone from "../../Images/hero-phone.png";
   

function Home() {

    const [show, setShow] = useState(false);

useEffect(() => {
    setShow(true);
}, []);


    return (
    <div className="container">
        <main className="home">
            <div className="container-left">
               <p className="pgeraçao">Nova Geração Disponivel</p>
               <h1 className="h1">O Futuro <br />Nas suas Mãos</h1>
               <p>Descubra a fusão perfeita entre arte e tecnologia. O Nexus 
               <br /> X1 não é apenas um smartphone, é uma extensão da sua 
               <br /> mente.</p>
                   <div className="btn">
                       <button className="btnprodutos">Ver Produtos</button>
                       <button className="btnsaibamais">Saiba mais</button>
                   </div>
            </div>
            <div className="container-right">
                <img 
                src={heroPhone} 
                alt="Hero Phone" 
                className={show ? "herophone show" : "herophone"}
                width={530} />
            </div>
        </main>
        <h1 className="h1engenharia">Engenharia de <span> Precisão</span></h1>
        <section className="divengenharia">
            <div className="engenharia1">
                <h2>144Hz</h2>
                <h4>Display</h4>
            </div>
            <div className="engenharia2">
                <h2>200 MP</h2>
                <h4>Camera</h4>
            </div>
            <div className="engenharia3">
                <h2>3nm</h2>
                <h4>Chipset</h4>
            </div>
            <div className="engenharia4">
                <h2>6000 mAh</h2>
                <h4>Bateria</h4>
            </div>
        </section>
        
    </div>
    );
}

export default Home;