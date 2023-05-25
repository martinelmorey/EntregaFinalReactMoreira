import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { FavContext } from '../providers/FavProvider';

const Item = ({ producto }) => {
  const { addToFav, removeItemFav, isItemInFav } = useContext(FavContext);

  const { id, title: nombre, price: precio, image } = producto;

  const [isLiked, setIsLiked] = useState(isItemInFav(id));

  const handleClick = () => {
    const productoConCantidad = { ...producto };

    if (isLiked) {
      removeItemFav(productoConCantidad.id);
    } else {
      addToFav(productoConCantidad);
    }

    setIsLiked(!isLiked);
  };

  const likeButtonClass = isLiked ? 'liked' : '';

  return (
    <div className="producto">
      <section>
        <img src={`${image}`} alt="" />
        <h4><Link to={`/item/${id}`}>{nombre}</Link></h4>
        <h3>${precio}</h3>
        <button><Link to={`/item/${id}`}>Ver Producto</Link></button>
        <button className={likeButtonClass} onClick={handleClick}>Me gusta</button>
      </section>
    </div> 
  )
}

export default Item;
