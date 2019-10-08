import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import Menu from './Menu';
import 'antd/dist/antd.css';
import Rodape from './Footer';
import MediaQuery from 'react-responsive';
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
          <MediaQuery minDeviceWidth={1024}>
            <div style={{display: 'flex'}}>
              <div
                style={{
                  background: 'rgb(255, 255, 255, 0.5',
                  height: 46,
                  width: 100,
                  marginRight: 50
                }}
              >
                a
              </div>
              <Menu />
            </div>
              <Button
                href="./Login"
                size="large"
                type="danger"
                style={{ marginLeft: 30, marginRight: 50 }}
              >
                Entrar/Registro
              </Button>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1000}>
              <div
                style={{
                  background: 'rgb(255, 255, 255, 0.5',
                  height: 46,
                  width: 100,
                  marginRight: 50
                }}
              >
                a
              </div>
              <Menu />
            </MediaQuery>
          </Header>
          <Content>
            <div style={{ background: '#fff' }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#FDFDFD' }}>
            <Rodape/>
          </Footer>
        </Layout>
      </div>
    );
  }
}
