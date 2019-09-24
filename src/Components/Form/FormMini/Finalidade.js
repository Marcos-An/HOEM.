import React from 'react';
import { Select  } from 'antd';

const { Option } = Select;

export default class Finalidade extends React.Component {
  
  render() {
    const { handleChange } = this.props
    return (
      <>
        <h4 style={{color: '#2c3e50', fontSize: 15}}>Finalidade</h4>
        <Select size="large"  placeholder="Ex: Venda" style={{ width: "100%" }} onChange={handleChange}>
          <Option value="Aluguel">Aluguel</Option>
          <Option value="Venda">Venda</Option>
        </Select>
      </>
    );
  }
}