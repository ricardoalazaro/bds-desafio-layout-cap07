import MainImage from 'assets/images/product1.png';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-image-container">
         <img src={MainImage} alt="" />
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho.
            </p>            
          </div>
        </div>
      </div>
      <div className="button-card">
        <div className="home-button-container">
          <div>
            <Link to="/products">
              <ButtonIcon />
            </Link>
          </div>
          <div>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
