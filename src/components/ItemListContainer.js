import Producto from "./producto"


const ItemListContainer = (props) => {
  
    return (<>
      <Producto titulo="Short" precio={200} />
      <Producto titulo="Remera" precio={120} />
      </>
    )
  }
  
  export default ItemListContainer