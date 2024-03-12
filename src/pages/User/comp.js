import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
const Comp = () => {
  const handleGoHome = () => {
    window.location.href = '/home';
  }
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<Button type="primary" onClick={handleGoHome}>Back Home</Button> } 
    />
    
  );
};
export default Comp;
