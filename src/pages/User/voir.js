import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';

const FormDisabledDemo = () => {
  const [componentDisabled] = useState(true);

  return (
    <> 
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="name">
          <Input />
        </Form.Item>
        
        <Form.Item label="last name">
          <Input />
        </Form.Item>

        <Form.Item label="email">
          <Input />
        </Form.Item>

        <Form.Item label="Select departement">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

      </Form>

       <Form.Item>
            <div style={{ position: 'fixed', right: 0, bottom: 0, padding: '100px' }}>
            <Button type="primary" htmlType="submit" >
              Terminer
            </Button>
            </div>
          </Form.Item>
          
    </>
    
  );
};

export default FormDisabledDemo;
