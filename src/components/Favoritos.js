import FavList from './FavList';
import { useContext } from 'react';
import { FavContext } from '../providers/FavProvider';

const Favoritos = () => {
  const { favItems, emptyFav } = useContext(FavContext); 


  const handleClickVaciar = () => {
    emptyFav();
  };


  if (favItems.length === 0) {
    return (
      <div id="cart">
        <div className='emptycart'>
          <h1>No tienes favoritos por el momento</h1>
        </div>
      </div>
    );
  }

  return (
    <div id="cart">
      <h1>Hola, bienvenido a tus FAVORITOS</h1>      
      <FavList/>
      <div className="totalcart">
        <button onClick={handleClickVaciar}>Vaciar favoritos</button>
      </div>
    </div>
  );
};

export default Favoritos;
