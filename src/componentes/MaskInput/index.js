

import './MaskInput.css'
import { IMaskInput } from "react-imask";

const MaskInput = (props) => {

    const aoDigitar = (evento) => { 
        props.aoAlterar(evento.target.value) 
    }

    return ( 
        <div className="mask-input">
            <label>{props.label}</label>  
            <IMaskInput valor={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} mask={props.mask} />
        </div>
    )
}  
 
export default MaskInput 