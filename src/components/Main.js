import { useState } from "react"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"
import Filtrado from "./Filtrado"
import FormContainer from "./FormContainer"
import ItemListContainer from "./ItemListContainer"

const Main = () => {

  const [valor, setValor] = useState("page1")

  const handeClick = (e) =>{
    const elBoton = e.target
    const elId = elBoton.id
    setValor(elId)
  }

  if(valor === "page1"){
    return (
      <main>
        <h1>Home</h1>
  
        <button id="page1" onClick={handeClick}>Page1</button>
        <button id="page2" onClick={handeClick}>Page2</button>
        <button id="page3" onClick={handeClick}>Page3</button>
  
        <ItemListContainer />
        <FormContainer />
        <Filtrado />
  
        <Page1/>
      </main>
    )

  }else if (valor === "page2"){
    return (
      <main>
        <h1>Home</h1>
  
        <button id="page1" onClick={handeClick}>Page1</button>
        <button id="page2" onClick={handeClick}>Page2</button>
        <button id="page3" onClick={handeClick}>Page3</button>
  
        <ItemListContainer />
        <FormContainer />
        <Filtrado />
  
        <Page2/>
      </main>
    )
  }else if (valor ==="page3"){
    return (
      <main>
        <h1>Home</h1>
  
        <button id="page1" onClick={handeClick}>Page1</button>
        <button id="page2" onClick={handeClick}>Page2</button>
        <button id="page3" onClick={handeClick}>Page3</button>
  
        <ItemListContainer />
        <FormContainer />
        <Filtrado />
  
        <Page3/>
      </main>
    )
  }
}

export default Main