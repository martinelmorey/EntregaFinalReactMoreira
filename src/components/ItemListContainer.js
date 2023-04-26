import Producto from "./Producto"


const ItemListContainer = () => {


    return (
      <div id="productos">
        <Producto titulo="Short" precio={200} />
        <Producto titulo="Remera" precio={120} />
      </div>
    )
  }
  
  export default ItemListContainer