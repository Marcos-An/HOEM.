import React from 'react';
import { Select  } from 'antd';

const { Option } = Select;

export default class TipoImovel extends React.Component {
  render() {
    const { handleChange } = this.props
    return (
      <div style={{marginTop: -10}}>
       <h4 style={{color: '#2c3e50', fontSize: 15}}>Tipo</h4>
        <Select  
          size="large"  
          placeholder="Ex: Apartamento" 
          style={{ width: "100%"}} 
          onChange={handleChange}
        >
           <Option value={undefined}>Todos</Option>
          <Option value="Apartamento">Apartamento</Option>
          <Option value="Barracao">Barracao</Option>
          <Option value="Casa">Casa</Option>
          <Option value="Casa Comercial">Casa Comercial</Option>
          <Option value="Chácara">Chácara</Option>
          <Option value="Condominio">Condominio</Option>
          <Option value="Kitinete">Kitinete</Option>
          <Option value="Sala Comercial">Sala Comercial</Option>
          <Option value="Salao Comercial">Salao Comercial</Option>
          <Option value="Sitio">Sitio</Option>
          <Option value="Sobrado">Sobrado</Option>
          <Option value="Terreno">Terreno</Option>
        </Select>
       </div>
    );
  }
}