

import './Formulario.css'
import CampoTexto from '../CampoTexto'; 
import ListaAreas from '../ListaAreas';
import MaskInput from '../MaskInput';
import Botao from '../Botao';
import { useState } from 'react' 
 
const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')  
    const [imagem, setImagem] = useState('')
    const [area, setAreas] = useState('')
 
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            telefone,
            imagem,  
            area
        })
    }

    
    return (
        <section className="formulario"> 
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para cadastrar colaborador</h2>
                <CampoTexto valor={nome} aoAlterar={valor => setNome(valor)} obrigatorio="true" label="Nome" placeholder="Digite o nome" />
                <MaskInput valor={telefone} aoAlterar={valor => setTelefone(valor)} obrigatorio="true" label="Telefone" placeholder="Digite o telefone" mask="(00) 00000-0000" />
                <CampoTexto valor={imagem} aoAlterar={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaAreas valor={area} aoAlterar={valor => setAreas(valor)} obrigatorio="true" label="Área de atuação" itens={props.areas} /> 
                <Botao>Cadastrar</Botao> 
            </form>  
        </section> 
    )
}

export default Formulario