import ProductImg from "assets/images/car-card.png";

import "./styles.css";
const ProductCard = () => {
  return (
    <>
      <div className="base-card container-product">
        <div>
          <img src={ProductImg} alt="Nome do Produto" />
        </div>
        <div>
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <div className="button-product-container">
            <button className="button-product bg-secondary">COMPRAR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
