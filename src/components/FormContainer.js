import {useState , useEffect} from "react"
import Button from 'react-bootstrap/Button';

const userNames = [
    {Nombre:"Martin",Edad:"35"},
    {Nombre:"Romina",Edad:"31"},
    {Nombre:"Ramona",Edad:"65"},
    {Nombre:"Alfredo",Edad:"67"}
]


const FormContainer = () => {
    const [valorEdad, setValorEdad] = useState("")
    const [valorNombre, setValor] = useState("")
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        setTimeout(() => {
            setUsuarios(userNames)
        }, 2000)

    }, [])

    const handleChange = (e) => {
        console.log(e.target.value)
        setValor(e.target.value)
    }

    const handleChangeEdad= (e) => {
        console.log(e.target.value)
        setValorEdad(e.target.value)
    }

    const handleClick = () => {
        console.log("click")
        //otra forma de copiar un array
        //const copia = [...usuarios]

        //Se recorre el array usuarios hasta el que termine
        const copia = usuarios.slice(0)

        //se modifica la copia
        copia.push({Nombre: valorNombre, Edad: valorEdad}) // Add new object with the name


        // se se agrega copia a usuarios con el set
        setUsuarios(copia)
    }




    return(
        <div>
            <h1>Agregar al array</h1>
            <input onChange={handleChange} type="text"/>
            <input onChange={handleChangeEdad} type="text"/>

            <Button onClick={handleClick}>Agregar</Button>
            {usuarios.map((item,i) => { 
                return <p key={i}>El valor del item {i} es {item.Nombre} y tiene {item.Edad} </p>
            })}
        </div>
    )

}


export default FormContainer