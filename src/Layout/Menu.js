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
            title={<Button type="primary">Entrar </Button>}
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
              <Menu.Item onClick={this.goTo('/')}>Inicio</Menu.Item>
              <Menu.Item>Menu</Menu.Item>
              <Menu.Item>Menu</Menu.Item>
              <Menu.Item>Menu</Menu.Item>
            </Menu>
          </Drawer>
        </MediaQuery>

        <MediaQuery minDeviceWidth={1024}>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item onClick={this.goTo('/')}>Inicio</Menu.Item>
            <Menu.Item>Menu</Menu.Item>
            <Menu.Item>Menu</Menu.Item>
            <Menu.Item>Menu</Menu.Item>
            <Button type="primary" style={{ marginLeft: 30, marginRight: 50 }}>
              Login
            </Button>
          </Menu>
        </MediaQuery>
      </>
    );
  }
}

export default withRouter(MenuPrincipal);
