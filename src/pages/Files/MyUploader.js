import React, { useState } from 'react';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'; 
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, Upload, Form } from 'antd';

const DraggableUploadListItem = ({ originNode, file, onRemove }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: file.uid,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'move',
  };

  const handleRemove = () => {
    onRemove(file.uid);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={isDragging ? 'is-dragging' : ''}
      {...attributes}
      {...listeners}
    >
      {file.status === 'error' && isDragging ? originNode.props.children : (
        <div>
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            {file.name}
          </a>
          <Button icon={<DeleteOutlined />} onClick={handleRemove} style={{ marginLeft: '8px' }} /> 
        </div>
      )}
    </div>
  );
};

const MyUploader = () => {
  const [fileList, setFileList] = useState([]);

  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id);
        const overIndex = prev.findIndex((i) => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  const onChange = ({ fileList: newFileList }) => {
    const updatedFileList = newFileList.map(file => {
      if (file.type === 'application/pdf') {
        return {
          ...file,
          url: URL.createObjectURL(file.originFileObj),
        };
      }
      return file;
    });
    setFileList(updatedFileList);
  };

  const handleRemove = (fileUid) => {
    setFileList((prev) => prev.filter((file) => file.uid !== fileUid)); 
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  return (
    <Form {...formItemLayout}>
      <Form.Item label="Upload" htmlFor="upload">
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
          <SortableContext items={fileList.map((i) => i.uid)} strategy={verticalListSortingStrategy}>
            <Upload
              id="upload"
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              fileList={fileList}
              onChange={onChange}
              itemRender={(originNode, file) => (
                <DraggableUploadListItem originNode={originNode} file={file} onRemove={handleRemove} /> 
              )}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </SortableContext>
        </DndContext>
      </Form.Item>
    </Form>
  );
};

export default MyUploader;
