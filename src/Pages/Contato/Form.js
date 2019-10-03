import React from 'react'
import { Form, Input, Button } from 'antd'
const { TextArea } = Input;

export default function Contato(){
  return(
      <Form style={{padding: '30px 30px 30px 30px'}}>
        <Form.Item>
          <Input size="large" placeholder="Seu nome" /> 
        </Form.Item>
        <Form.Item>
          <Input size="large" placeholder="Seu email" /> 
        </Form.Item>
        <Form.Item>
          <Input size="large" placeholder="Assunto" /> 
        </Form.Item>
        <Form.Item>
          <TextArea size="large" placeholder="Mensagem" rows={4}/> 
        </Form.Item>
        <Button 
            size="large" 
            type="primary" 
            block 
          >
             Pesquisar 
          </Button>
      </Form>
  );
}