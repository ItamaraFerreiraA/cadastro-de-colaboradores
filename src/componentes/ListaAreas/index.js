
import './ListaAreas.css'

const ListaAreas = (props) => {

   return (
        <div className="lista-areas">
            <label>{props.label}</label> 
            <select value={props.valor} onChange={evento => props.aoAlterar(evento.target.value)} required={props.obrigatorio}>
                <option value="" disabled selected>Selecione a sua área de atuação</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option> 
                })}
            </select>  
        </div>  
   )  
}

export default ListaAreas