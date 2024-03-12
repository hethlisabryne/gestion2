import React, { useState } from 'react';
import { FolderOutlined, FileAddOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Layout, Menu, Input, Button } from 'antd';
import MyUploader from './MyUploader';
import Comp from '../User/comp'; 

const { Sider, Content } = Layout;
const initialFolders = [
  { key: '1', label: 'Informatique' },
  { key: '2', label: 'Administratif' },
];

const Files = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [folders, setFolders] = useState(initialFolders);
  const [showComp, setShowComp] = useState(false); 

  const handleClick = (key) => {
    if (key === '0') {
      setShowUploader(false);
      setShowComp(false); 
    } else if (key === '3' || key === '1' || key === '2') {
      setShowUploader(true);
      setShowComp(false); 
    }
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim() !== '') {
      const newFolder = {
        key: `folder${folders.length + 1}`,
        label: newFolderName,
      };
      setFolders([...folders, newFolder]);
      setNewFolderName('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCreateFolder();
    }
  };

  const handleFinish = () => {
    setShowUploader(false);
    setShowComp(true);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" onClick={({ key }) => handleClick(key)}>
          
          <Menu.SubMenu key="sub1" icon={<FolderOutlined />} title="Folder">
            <Menu.Item key="addFolder">
              <Input
                placeholder="Add Folder:"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ width: 120 }}
              />
            </Menu.Item>
            {folders.map(folder => (
              <Menu.Item key={folder.key} icon={<FolderOpenOutlined />}>{folder.label}</Menu.Item>
            ))}
          </Menu.SubMenu>
          <Menu.Item key="3" icon={<FileAddOutlined />}>AddFiles</Menu.Item>
        </Menu>
      </Sider>
      <Content >
        {showUploader && (
            <MyUploader />
        )}</Content>
        {showComp && <Comp />} 
        {showUploader && (
          <div style={{ marginTop: 700}}>
            <Button type="primary" onClick={handleFinish}>Terminer</Button>
          </div>
        )}
      
    </Layout>
  );
};

export default Files;
