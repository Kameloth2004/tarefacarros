import './styles.css';


const Busca = () => {
  return (
    <div className="busca-box-container">
      <input type="text" id="txtBusca" placeholder="Digite sua busca" />
      <button className="btn-busca bg-secondary">BUSCAR</button>
    </div>
  );
};

export default Busca;
