// src/components/Cs.tsx
import { useModel } from 'umi'
import {useState} from 'react'
import {message,Button,Modal} from 'antd'
import usePlusModal from 'use-plus-modal';
import type { UpdateFormOkParams, UpdateFormProps } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
 const Page = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    updateModalRef.current.setVisible(true);
  };

  const updateModalRef = usePlusModal<UpdateFormProps, UpdateFormOkParams>(<UpdateForm/>, {
    title: '编辑',
  });
    return (
      <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {/* <UpdateForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> */}
    </>
    );
  }
  export default Page;  