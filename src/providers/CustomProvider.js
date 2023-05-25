import { createContext, useState } from "react";

//Traemos el valor de contexto y le sacamos el Provider
export const contexto = createContext()
export const { Provider } = contexto

const CustomProvider = ({ children }) => {

  const [nombre, setNombre] = useState("Martin")

  const guardarCarrito = () => {
    console.log("guardando en carrito")
    setNombre("Otro nombre")
  }

  //variable global del contexto que comparto en los componentes
  const valorDelContexto = {
    nombre: nombre,
    carrito: [],
    guardarCarrito: guardarCarrito
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default CustomProvider
