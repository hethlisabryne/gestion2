import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import Comp from './comp'; 
 
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const Update = () => {
  const [departments] = useState(['dep1', 'dep2', 'dep3']);
  const [/*selectedDepartment*/, setSelectedDepartment] = useState('');
  const [showComp, setShowComp] = useState(false);
  const [uploadDisabled, setUploadDisabled] = useState(true);

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
    setUploadDisabled(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    setShowComp(true);
  };

  return (
    <>
      {!showComp ? (
        <Form
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="Name"
            rules={[
              {
                required: true,
                message: 'Please your Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="Last Name"
            rules={[
              {
                required: true,
                message: 'Please your Last Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please your Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            label="Select"
            name="Select"
            rules={[
              {
                required: true,
                message: 'Please input!',
              },
            ]}
          >
            <Select onChange={handleDepartmentChange}>
              {departments.map(dep => (
                <Select.Option key={dep} value={dep}>{dep}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <div style={{ position: 'fixed', right: 0, bottom: 0, padding: '100px' }}>
            <Button type="primary" htmlType="submit"   disabled={uploadDisabled}>
              Terminer
            </Button>
            </div>
          </Form.Item>
        </Form>
      ) : (
        <Comp />
      )}
    </>
  );
};

export default Update;
