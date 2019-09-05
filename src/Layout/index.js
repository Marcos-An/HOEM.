import React, { Component } from 'react';
import { Layout } from 'antd';
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
          <Header breakpoint="lg" theme="light" style={{ zIndex: 1 }}></Header>
          <Content>
            <div style={{ background: '#fff' }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Vamos Fazer na mão</Footer>
        </Layout>
      </div>
    );
  }
}
