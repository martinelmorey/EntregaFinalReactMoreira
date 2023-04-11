import CartWidget from "./CartWidget"


const NavBar = () => {

    return(
        <>
            <ul>
                <li> <a href="/home">Home</a></li>
                <li> <a href="/catalogo">Remeras</a></li>
                <li> <a href="/catalogo">Shorts</a></li>
                <li> <a href="/catalogo">Catalogo</a></li>
                <CartWidget/>
            </ul>
        </>    
    )

}


export default NavBar