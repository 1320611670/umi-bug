import React, { memo, useEffect,useState} from 'react';
import type { FC } from 'react';
import {  useModel } from 'umi';
import { Input, Form, Modal} from 'antd';
import type { FormInstance } from 'antd';
import type { CurrentItem, UpdateItem } from '../data.ts';


export type UpdateFormOkParams = {
  form: FormInstance<UpdateItem>;
};
export type UpdateFormProps = {
  currentItem?: CurrentItem;
  setOkParams?: (e: UpdateFormOkParams) => void;
  regionTree?: any;
};
const UpdateForm: FC<UpdateFormProps> = memo(({ isModalOpen,setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const {user} =  useModel('userModel')
  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
  );
});

export default UpdateForm;
