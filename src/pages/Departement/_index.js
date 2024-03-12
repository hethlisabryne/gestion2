import React, { useState } from 'react';
import { ClusterOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Add from './Add';
import Update from './Update';
import Delete from './Delete'


const { Sider } = Layout;

const items = [
  {
    key: 'sub1',
    label: 'Departement',
    icon: <ClusterOutlined />,
    items: [
      { key: '1', label: 'Add Departement' },
      { key: '2', label: 'Update Departement' },
      { key: '3', label: 'Delete Departement' },
    ],
  },
];

const Departement = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuClick = ({ key }) => {
    setSelectedMenuItem(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleMenuClick}>
          {items.map((item) => (
            <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.items.map((child) => (
                <Menu.Item key={child.key}>{child.label}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <>
        {selectedMenuItem && selectedMenuItem === '1' && <Add />}
        {selectedMenuItem && selectedMenuItem === '2' && <Update/>}
        {selectedMenuItem && selectedMenuItem === '3' && <Delete/>}
        </>
      </Layout>
    </Layout>
  );
};

export default Departement;
