import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import { getProductos } from '../utils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);

  const [estado, setEstado] = useState([]);
  const parametros = useParams();

  useEffect(() => {
    const res = getProductos();
    res.then((resultado)=>{
      setLoading(false);
      setEstado(resultado)
    })
  }, [parametros.id]);

  const productosFiltrados = estado.filter(
    (categoria) => categoria.categoria === parametros.id
  );

  if (loading) {
    return (
      <>
        <div className='skeletonproductocontainer'>
          <div className='skeletonproducto'><Skeleton height={400} count={2} /> </div>
          <div className='skeletonproducto'><Skeleton height={400} count={2} /></div>
          <div className='skeletonproducto'><Skeleton height={400} count={2} /></div>
          <div className='skeletonproducto'><Skeleton height={400} count={2} /></div>
        </div>
      </>
    );
  }

  if(parametros.id){
    return (
      <div>
        <h1>Categoría: {parametros.id}</h1>
        <ItemList productos={productosFiltrados} />
      </div>
    );
  }else{
    return (
      <div>
        <h1>Catalogo de productos:</h1>
        <ItemList productos={estado} />
      </div>
    );  
  }
};



export default ItemListContainer;
