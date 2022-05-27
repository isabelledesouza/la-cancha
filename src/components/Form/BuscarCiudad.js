import {useState} from "react" 
// import Canchas from  "./data.json"
import "./BuscarCiudad.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';



const BuscaCiudad = ({placeholder, data}) => {
   const [filterData, setFilterDate ] = useState([])
   const handleChange = (event) => {
       const buscarPalabra = event.target.value
       const newFilter = data.filter((value) => {
         return  value.nombre.toLowerCase().includes(buscarPalabra.toLowerCase())
       })
       return  setFilterDate(newFilter)  
   }
   const selectItem = (event) => {
    const nombre = event.target.textContent;
    document.querySelector('#cancha').value = nombre;
   }
    return (
        <div className= "buscar">
            <div className="buscaInput">
                <input id="cancha" type="text" placeholder={placeholder} data={data} onChange= {handleChange}/>
                <div className= "searchIcon"><SearchRoundedIcon/></div>
            </div>
            {filterData.length !== 0 && (
            <div className= "dataResult" >{filterData.map((value,key ) => {
                return (<button className="canchaItem" onClick={selectItem}>{value.nombre}</button>)
                // return( <a className="canchaItem" href={value.link} target="_blank" rel="noreferrer"><p>{value.nombre}</p></a>)
            })}
            </div>
            )}
        </div>
    )

}

export default BuscaCiudad
