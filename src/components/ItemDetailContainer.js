import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getProductos } from '../utils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ItemDetailPage = () => {
  const [estado, setEstado] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const parametros = useParams();

  const validParam = true; //validator.isInt(id)

  useEffect(() => {
    const res = getProductos();
    res.then((resultado) => {
      const producto = resultado.find((id) => id.id === parametros.id);

      if (producto) {
        setLoading(false);
        setEstado(producto);
      } else {
        console.log("Error al cargar producto");
      }
    });
  }, [id, parametros.id]);

  if (!validParam) {
    return (
      <div>
        <h1>El id ingresado no es válido</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <>
        <Skeleton height={100} />
        <div className="detalle-producto">
          <div className='left-side'>
            <Skeleton height={500} />
          </div>
          <div className='right-side'>
            <Skeleton count={4} />
            <Skeleton width={200} />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='contenedor-producto-detail'>
      <ItemDetail producto={estado} />
    </div>
  );
};

export default ItemDetailPage;
