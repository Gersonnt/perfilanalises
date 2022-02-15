import React, { useState } from 'react';
import './App.css';
import Modal from 'react-modal/lib/components/Modal';
import Questions from './Questions/index';
import modalImg from './modalImg.jpg';

Modal.setAppElement('#root');

export default function App(){
  
    var totalHours =0;

    const [isModalOpen, setIsModalOpen] = useState(true);
    function handleCloseModal(){
        setIsModalOpen(false);
    }

    
    return(
        <>
        
        <Modal isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className='modal-content'
                overlayClassName='react-overlay'
        >
            <img alt='' src={modalImg} class='modal-img'></img>
        </Modal>
        <Questions totalHours={totalHours}/>

        
        </>
);
  

}

