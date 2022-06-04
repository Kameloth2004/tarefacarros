import { ReactComponent as HeaderImage } from "assets/images/car-header.svg";
import Navbar from "components/Navbar";
import ButtonIcon from "components/ButtonIcon";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="header-container">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <HeaderImage />
        </div>
      </div>

      <div className="button-card">
        <div className="button-container">
          <ButtonIcon />
          <p>Comece agora a Navegar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
