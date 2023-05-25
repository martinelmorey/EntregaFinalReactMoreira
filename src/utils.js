import {db} from "./firebase"
import { getDocs,collection, where, query, addDoc } from "firebase/firestore"

export const getProductos = () => {
  const productosCollection = collection(db, "productos")

  return getDocs(productosCollection)
    .then((respuesta) => {
      const arrayrespuesta = respuesta.docs
      const resultado = arrayrespuesta.map((documento) => {
        const id = documento.id
        const data = documento.data()
        data.id = id
        return data
      })
      return resultado
    })
    .catch((error) => {
      console.log("Hubo un error pidiendo todos los productos")
    })
}


export const getProductosPorCategoria = () => {
  const productosCollection = collection(db, "productos")
  const filtro = query(productosCollection,where("category","==","cuadros"))

  return getDocs(filtro)
    .then((respuesta) => {
      const arrayrespuesta = respuesta.docs
      const resultado = arrayrespuesta.map((documento) => {
        const id = documento.id
        const data = documento.data()
        data.id = id
        return data
      })
      return resultado

    })
    .catch((error) => {
      console.log(error)
    })
}


export const crearVenta = (venta) => {
  console.log("...creando una venta")
  const ventasCollection = collection(db, "ventas")
  return addDoc(ventasCollection,venta)
    .then((respuesta) =>{
      return respuesta.id
    })
    .catch((error)=>{
      console.log(error)
    })
}










