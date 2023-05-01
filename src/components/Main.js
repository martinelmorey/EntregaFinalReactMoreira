import {Routes, Route} from "react-router-dom"
import ItemListContainer from "../pages/ItemListContainer"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import Cart from "../pages/Cart"
import PageNotFound from "../pages/PageNotFound"


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>  
    </main>  
  )
}

export default Main