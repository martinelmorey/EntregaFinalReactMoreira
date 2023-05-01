import {useState} from "react"
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

const Item = ({producto}) => {


    const { id, title: nombre, price: precio, image } = producto;


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
                    <img src={`${image}`} alt=""/>
                    <h4>{nombre}</h4>
                    <h3>${precio}</h3>
                    <Button id="btn" ><Link to={`/item/${id}`}>Ver Detalle</Link></Button>
                    <Button id="btn" onClick={handleClick}>{megusta}Me gusta</Button>
                </section>
            </div>
        )    
    }else{
        return (
            <div className="producto">
                <section className={`${color}`}>
                <img src={`${image}`} alt=""/>
                <h4>{nombre}</h4>
                <h3>${precio}</h3>
                <Button id="btn" ><Link to={`/item/${id}`}>Ver Detalle</Link></Button>
                <Button id="btn" onClick={handleClick}>{megusta} - Me gusta</Button>
                </section>
            </div>    
        )
    }
    
}

export default Item
