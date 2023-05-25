import {Routes, Route} from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer"
import Favoritos from "../components/Favoritos"
import PageNotFound from "../pages/PageNotFound"
import Cart from "./Cart"


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>  
    </main>  
  )
}

export default Main