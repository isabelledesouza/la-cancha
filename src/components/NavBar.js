
import Logo from  "../Images/field.svg"


const NavBar = () =>  {
    return (
        <div>
            <div>
               <a href="home" className="" ><img src= {Logo} alt = "#"/></a> 
                <span>Reservo mi cancha</span>
            </div>
        <nav>
            <ul>
                <li><a href="#acerca">Acerca de</a></li>
                <li><a href="#centro">Soy un centro Derportivo </a></li>
                <li><a href="#registrate">Registrate  </a></li>
                <li><a href="#ingressa">Ingressar</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar 