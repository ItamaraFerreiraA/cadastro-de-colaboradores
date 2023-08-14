
import Colaborador from '../Colaborador'
import './Area.css' 

const Area = (props) => {
    
    return (
        props.colaboradores.length > 0  ?  

            <section className='area' style={{ backgroundColor: props.cor2 }}> 
            {/* as chaves de dentro vem p mostrar que é um obj, recebendo o css no formato js */}
    
                <h3 style={{ borderColor: props.cor1 }}>{props.nome}</h3>
                <div className='colaboradores'>
                    {props.colaboradores.map( colaborador => 
                        <Colaborador corDeFundo={props.cor1} key={colaborador.nome} nome={colaborador.nome} telefone={colaborador.telefone} cargo={colaborador.apelido} imagem={colaborador.imagem} deletarColaborador={props.deletarColaborador}  />
                    )}
                </div> 
            </section> 

        : ''
    )
}
  
export default Area 