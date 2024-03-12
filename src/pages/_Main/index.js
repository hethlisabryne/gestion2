import React, { useState } from 'react'; 
import { Button, Layout } from 'antd'; 
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from '../Login'; 
import Registre from '../Registre'; 
import Files from '../Files/_index'; 
import User from '../User/_index'; 
import Departement from '../Departement/_index'; 
import Home from '../Home/_index'; 

export const Main = () => {
  const [page, setPage] = useState('Home'); 

  const handleChange = (selectedPage) => { 
    setPage(selectedPage); 
  };

  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/register" element={<Registre />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/files" element={<Files />} /> 
        <Route path="/user" element={<User />} /> 
        <Route path="/department" element={<Departement />} /> 
      </Routes>
      
      {page === 'Home' ? (
        <Home onSelectPage={handleChange} /> 
      ) : page === 'User' ? ( 
        <User />
      ) : page === 'Files' ? (
        <Files />
      ) : (
        <Departement />
      )}
      
      <Layout> 
        <div style={{ position: 'fixed', right: 0, bottom: 0, padding: '10px' }}> 
          {page !== 'Home' && ( 
            <Button style={{ marginRight: 10 }} onClick={() => setPage('Home')}> 
              <ArrowLeftOutlined /> Back Home
            </Button>
          )}
          {page !== 'Department' && ( 
            <Button type="primary" onClick={() => handleChange(page === 'Home' ? 'Files' : page === 'Files' ? 'User' : 'Department')}> 
              <ArrowRightOutlined /> Go to {page === 'Home' ? 'Files' : page === 'Files' ? 'User' : 'Department'}
            </Button>
          )}
        </div>
        
      </Layout>
      </Router>
  
  );
};
export default Main; 
