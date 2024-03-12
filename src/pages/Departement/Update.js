import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import Comp from '../User/comp';

const { Search } = Input;

const Update = () => {
  const [showComp, setShowComp] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [departmentName, setDepartmentName] = useState('');
  const [searchDepartment, setSearchDepartment] = useState('');
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

  const handleSearchChange = (value) => {
    setSearchDepartment(value);
  };

  const handleSearch = () => {
    console.log("Search clicked:", searchDepartment); 
  };

  return (
    <div>
      {showComp ? (
        <Comp />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Search
              placeholder="Search for a department"
              enterButton
              onChange={handleSearchChange}
              style={{ width: 200 }} 
            />
           
          </div>
          <div style={{ padding: 10 }}>
            <Input
              placeholder="Enter the department name"
              value={departmentName}
              onChange={handleDepartmentChange}
              style={{ width: 200 }}
            />
            <Button onClick={showModal} disabled={isAddButtonDisabled}>
              Update
            </Button>
          </div>
          <Modal
            title={`Are you sure you want to update? ${departmentName} ?`}
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

export default Update;
