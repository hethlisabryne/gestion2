// Home.js
import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;

const items = [
  { key: '1', label: 'User' },
  { key: '2', label: 'Folder' },
  { key: '3', label: 'Department' }
];

const Home = ({ onSelectPage }) => {
  const handleMenuClick = (key) => {
    onSelectPage(key.toLowerCase()); 
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={({ key }) => handleMenuClick(key)}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
      </Content>
    </Layout>
  );
};

export default Home;
