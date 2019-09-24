import React from 'react'
import { Select } from 'antd';

const { Option } = Select;
export default class FormLayoutDemo extends React.Component {
  render() {
    const { handleChange } = this.props
    return(
        <>
          <h4 style={{color: '#2c3e50', fontSize: 15}}>Faixa de preço para venda</h4>
          <Select 
            size="large"  
            placeholder="Venda" 
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <Option value="50000 - 100000">R$50.000,00 - R$100.000,00</Option>
            <Option value="100000 - 150000">R$100.000,00 - R$150.000,00</Option>
            <Option value="150000 - 200000">R$150.000,00 - R$200.000,00</Option>
            <Option value="200000 - 250000">R$200.000,00 - R$250.000,00</Option>
            <Option value="250000 - 300000">R$250.000,00 - R$300.000,00</Option>
            <Option value="300000 - 350000">R$300.000,00 - R$350.000,00</Option>
            <Option value="350000 - 400000">R$350.000,00 - R$400.000,00</Option>
            <Option value="400000 - 450000">R$400.000,00 - R$450.000,00</Option>
            <Option value="450000 - 500000">R$450.000,00 - R$500.000,00</Option>
            <Option value="500000 - 550000">R$500.000,00 - R$550.000,00</Option>
            <Option value="550000 - Acima">R$550.000,00 +</Option>
          </Select>
        </>
    );
  }
}
