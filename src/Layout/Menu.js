import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Button, Icon, Drawer } from 'antd';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';

class MenuPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.goto = this.goTo.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  goTo(local) {
    return () => {
      this.props.history.push(local);
    };
  }

  handleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <MediaQuery maxDeviceWidth={1000}>
          <Icon
            onClick={this.handleOpen}
            type="menu"
            style={{ color: '#fff', fontSize: 20 }}
          />
          <Drawer
            title={<Button onClick={this.goTo('/Login')} type="primary">Entrar/Registro</Button>}
            width={200}
            placement="right"
            closable={true}
            onClose={this.handleOpen}
            visible={this.state.isOpen}
          >
            <Menu
              theme="light"
              mode="inline"
              style={{ width: '150%', marginLeft: -15 }}
            >
              <Menu.Item onClick={this.goTo('/')} key="1">
                Inicio
              </Menu.Item>
              <Menu.Item key="2" onClick={this.goTo('/Imoveis')}>
                Imóveis
              </Menu.Item>
              <Menu.Item  key="3">Menu</Menu.Item>
              <Menu.Item  key="4">Menu</Menu.Item>
            </Menu>
          </Drawer>
        </MediaQuery>

        <MediaQuery minDeviceWidth={1024}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={this.goTo('/')}>
              Inicio
            </Menu.Item>
            <Menu.Item key="2" onClick={this.goTo('/Imoveis')}>
              Imóveis
            </Menu.Item>
            <Menu.Item key="3">Menu</Menu.Item>
            <Menu.Item key="4" onClick={this.goTo('/Contato')}>
              Contato
            </Menu.Item>
          </Menu>
        </MediaQuery>
      </>
    );
  }
}

export default withRouter(MenuPrincipal);
