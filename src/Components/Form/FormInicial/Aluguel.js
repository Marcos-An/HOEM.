import React from 'react'
import { Select } from 'antd';

const { Option } = Select;
export default class FormLayoutDemo extends React.Component {
  render() {
    const { handleChange } = this.props 
    return (
        <>
          <h4 style={{color: 'white', fontSize: 15}}>Faixa de preço para aluguel</h4>
          <Select 
            size="large"  
            placeholder="Aluguel" 
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <Option value="0 - 500">R$0.00 - R$500.00</Option>
            <Option value="500 - 1000">R$500.00 - R$1.000,00</Option>
            <Option value="1000 - 1500">R$1.000,00 - R$1.500,00</Option>
            <Option value="1500 - 2000">R$1.500,00 - R$2.000,00</Option>
            <Option value="2000 - 2500">R$2.000,00 - R$2.500,00</Option>
            <Option value="2500 - 3000">R$R$2.500,00 - R$3.000,00</Option>
            <Option value="3000 - 3500">R$3.000,00 - R$3.500,00</Option>
            <Option value="3500 - 4000">R$3.500,00 - R$4.000,00</Option>
            <Option value="4000 - 4500">R$4.000,00 - R$4.500,00</Option>
            <Option value="4500 - 5000">R$4.500,00 - R$5.000,00</Option>
            <Option value="5000 - Acima">R$5.000,00 +</Option>
          </Select>
        </>
    );
  }
}
