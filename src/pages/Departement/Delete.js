import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import Comp from '../User/comp';

const { Search } = Input;

const Delete = () => {
  const [showComp, setShowComp] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(true);

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

  const handleInputChange = (value) => {
    setIsDeleteButtonDisabled(value === '');
  };

  return (
    <div>
      {showComp ? (
        <Comp />
      ) : (
        <>
          <Search
            placeholder="Enter your Department."
            enterButton
            style={{ width: 250 }}
            onChange={handleInputChange}
          />
          <Button onClick={showModal} disabled={isDeleteButtonDisabled}>
            Delete
          </Button>
          <Modal
            title="Are you sure you want to delete this Department?"
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

export default Delete;
