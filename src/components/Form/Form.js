
import  { useState } from "react";
import BuscaCiudad from "../Form/BuscarCiudad"
import DatePicker from "react-datepicker";
import Canchas from  "./data.json";
import "react-datepicker/dist/react-datepicker.css";


const Form = () => {
    const  [dateValue, setSelectDate ] = useState(null) 

   
    
    return (
        <>
        <BuscaCiudad placeholder={"¿Donde queréis jugar?"} data={Canchas} />
        <DatePicker select= {dateValue} 
            onChange= {date => setSelectDate(date)}
            dateFormat = 'dd/MM/yyyy'
            minDate = {new Date()}
            inputClass="custom-input"
            isClearable
       
    />  
        </>
     )  
    
}

export default Form