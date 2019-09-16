import React, { Component } from 'react';
import { Layout } from 'antd';
import Menu from './Menu';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Layout style={{ background: '#fff' }}>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                background: 'rgb(255, 255, 255, 0.5',
                height: 46,
                width: 100
              }}
            >
              a
            </div>
            <Menu />
          </Header>
          <Content>
            <div style={{ background: '#fff' }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Vamos Fazer na mão</Footer>
        </Layout>
      </div>
    );
  }
}
