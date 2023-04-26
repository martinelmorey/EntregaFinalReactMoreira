import {useState} from "react"
import Button from 'react-bootstrap/Button';





const Producto = (props) => {

    //Mostramos en consola el parametro props que viene de productosContainer
    console.log(props)
    console.log(props.precio)
  
    //Traemos la precio del props
    const precio = props.precio
    const titulo = props.titulo

    //Creamos la variable valor con useState
    const [megusta, setValor] = useState(0)

    //Creamos la variable valor con useState para toggle
    const [color, setColor] = useState(true)


    //Llamamos a la funcion handleClick
    const handleClick = (props) => {
      console.log("Click")
      setValor(megusta + 1)
      setColor(!color)
    }


    if(!color){
        return (
            <div className="producto">
                <section className={`${color}`}>
                    <h1>{titulo}</h1>
                    <h2>{`${color}`}</h2> 
                    <p>{precio}</p>
                    <p>{megusta}</p>
                    <Button id="btn" onClick={handleClick}>Me gusta</Button>
                </section>
            </div>
        )    
    }else{
        return (
            <div className="producto">
                <section className={`${color}`}>
                <h1>{titulo}</h1>
                <h2>{`${color}`}</h2>    
                <p>{precio}</p>
                <p>{megusta}</p>
                <Button id="btn" onClick={handleClick}>Me gusta</Button>
                </section>
            </div>    
        )
    }
    
}

export default Producto