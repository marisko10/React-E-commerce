import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {

    return (
        
   <div className='containerf'>
        <footer className='footer'>
            <div className='div1'>
                <div className='logotechmobile'>
                   <img src="src/Images/icone-simples-de-smartphone-preto-e-branco_1292509-15137(1).jpg" alt="logo" className="logo" width={24} />
                   <h4>TechMobile</h4>
                </div>
                <p className="techmobilep">Redefinindo o futuro da comunicação móvel 
                <br/>com design premium e tecnologia de ponta. </p>
            </div>
            <div className='div2'>
                <h3>Produtos</h3>
                <ul>
                  <li><Link to="/nexus-carbon">Nexus Carbon</Link></li>
                  <li><Link to="/nexus-titanium">Nexus Titanium</Link></li>
                </ul>
            </div>
            <div className='div3'>
                <h3>Suporte</h3>
                <ul>
                  <li><Link to="">Fale Conosco</Link></li>
                  <li><Link to="">Garantia</Link></li>
                  <li><Link to="">Termos de Uso</Link></li>
                </ul>
            </div>
        </footer>
        <h5>© 2024 TechMobile. Todos os direitos reservados.</h5>
    
    </div>
    )


}




export default Footer;