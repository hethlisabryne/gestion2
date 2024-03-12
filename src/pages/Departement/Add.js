import React, { useState } from 'react';
import { Modal, Input, Button, Popconfirm, Space } from 'antd';
import Comp from '../User/comp';

const Add = () => {
  const [showComp, setShowComp] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [departmentName, setDepartmentName] = useState('');
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true); 

  const handleConfirm = () => {
    setShowComp(true);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setShowComp(true);
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleDepartmentChange = (event) => {
    setDepartmentName(event.target.value);
    setIsAddButtonDisabled(event.target.value === '');
  };

  const handleAddTask = () => {};

  return (
    <div>
      {showComp ? (
        <Comp />
      ) : (
        <>
          <Input
            placeholder="Enter the Department name"
            value={departmentName}
            onChange={handleDepartmentChange}
            style={{ width: 250, marginBottom: 10 }}
          />
          <Space>
            <Button onClick={showModal} disabled={isAddButtonDisabled}>Add</Button>
            <Popconfirm
              title={`Are you sure you want to add this task to ${departmentName}?`}
              okText="Yes"
              cancelText="No"
              onConfirm={handleAddTask}
            >
              
            </Popconfirm>
          </Space>
          <Modal
            title={`Are you sure you want to Add ${departmentName}?`}
            visible={isModalVisible}
            onOk={handleConfirm}
            onCancel={handleCancel}
          > 
          </Modal>
        </>
      )}
    </div>
  );
};

export default Add;
