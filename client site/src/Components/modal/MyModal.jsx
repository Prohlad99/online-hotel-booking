import React, { useState } from 'react';
import Modal from 'react-modal';

const MyModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');

  const openModal = (url) => {
    setIsOpen(true);
    setLinkUrl(url);
  };

  const closeModal = () => {
    setIsOpen(false);
    setLinkUrl('');
  };

  return (
    <div>
      <button onClick={() => openModal(`${props.url}`)}>{props.btnName}</button>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Modal Content</h2>
        <iframe src={linkUrl} title="Modal Link" width="100%" height="400px"></iframe>
        <button className='bg-red-400' onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};


  
  export default MyModal