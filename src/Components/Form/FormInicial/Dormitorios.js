import React from 'react';
import { Select  } from 'antd';

const { Option } = Select;

export default class Dormitorios extends React.Component {
  
  render() {
    const { handleChange } = this.props
    return (
      <div style={{marginTop: -10}}>
        <h4 style={{color: 'white', fontSize: 15}}>Quantidade de Dormitórios</h4>
        <Select size="large"  placeholder="Ex: 3" style={{ width: "100%" }} onChange={handleChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
        </Select>
      </div>
    );
  }
}