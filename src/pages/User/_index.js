import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import FormDisabledDemo from './voir';
import Add from './add'; 
import Update from './Update'; 

const { Sider } = Layout;

const items = [
  { key: 'sub1', label: 'User', icon: <UserOutlined />, items: [
    { key: '1', label: 'Add User' },
    { key: '2', label: 'Update User' },
    { key: '3', label: 'View the user\'s coordinates', formComponent: <FormDisabledDemo /> },
  ]},
];

const User = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isUpdateSelected, setIsUpdateSelected] = useState(false);
  const [/*homeClicked*/, setHomeClicked] = useState(false);

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setIsUpdateSelected(menuItem.key === '2');
    if (menuItem.key === '0') {
      setHomeClicked(true);
    } else {
      setHomeClicked(false);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        
          {items.map(item => (
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.items && item.items.map(child => (
                <Menu.Item key={child.key} onClick={() => handleMenuClick(child)}>{child.label}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout>
       
        {selectedMenuItem && selectedMenuItem.formComponent}
        {isUpdateSelected && <Update />}
        {selectedMenuItem && selectedMenuItem.key === '1' && <Add />}
      </Layout>
    </Layout>
  );
};

export default User;
