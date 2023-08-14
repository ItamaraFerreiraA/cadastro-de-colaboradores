

import './Colaborador.css'

const Colaborador = ({nome, imagem, telefone, corDeFundo, deletarColaborador}) => {
        
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt='Imagem colaborador' />
            </div>
            <div className='rodape'>  
                <h4>{nome}</h4>
                <h5>{telefone}</h5> 
                <button className='btn-excluir' onClick={() => deletarColaborador(nome)} style={{ borderColor: corDeFundo, color: corDeFundo}}>Excluir</button>
            </div>
             
        </div> 
    )  
} 

export default Colaborador