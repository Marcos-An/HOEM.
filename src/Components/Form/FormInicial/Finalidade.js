import React from 'react';
import { Select  } from 'antd';

const { Option } = Select;

export default class Finalidade extends React.Component {
  
  render() {
    const { handleChange } = this.props
    return (
      <>
        <h4 style={{color: 'white',marginTop: 20, fontSize: 15}}>Finalidade</h4>
        <Select size="large"  placeholder="Ex: Venda" style={{ width: "100%" }} onChange={handleChange}>
          <Option value={undefined}>Todos</Option>
          <Option value="Aluguel">Aluguel</Option>
          <Option value="Venda">Venda</Option>
        </Select>
      </>
    );
  }
}