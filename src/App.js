
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Area from './componentes/Area';

function App() {

  
  const areas = [
    {
      nome: 'Manicure e pedicure',
      cor1: '#52C278',
      cor2: '#D9F7E9'
    },
    {
      nome: 'Cabelos',
      cor1: '#82CFFA',
      cor2: '#E8F8FF',
    },
    {
      nome: 'Massagem',
      cor1: '#A6D157',
      cor2: '#F0F8E2',
    }, 
    {
      nome: 'Depilação',
      cor1: '#E06B69',
      cor2: '#FDE7E8',
    }
  ]

  const [colaboradores, setColaboradores] = useState ([])

  const aoNovoColaboradorAdicionado = (colaborador) => { 
    setColaboradores([...colaboradores, colaborador])
  }   

  const deletarColaborador = (nome) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nome))
  }

  return (
    <div className="App"> 
      <Banner />
      <Formulario areas={areas.map(area => area.nome )} aoColaboradorCadastrado={colaborador =>  aoNovoColaboradorAdicionado(colaborador)} />
      {areas.map(area => 
        <Area  
          nome={area.nome} 
          cor1={area.cor1}   
          cor2={area.cor2} 
          deletarColaborador={deletarColaborador}
          colaboradores={colaboradores.filter(colaborador => colaborador.area === area.nome )} 
          /> 
      )}
    </div>
  ); 
}

export default App;

