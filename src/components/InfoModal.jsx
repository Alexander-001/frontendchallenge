import React from 'react';
import '../styles/modal.css';
import { Modal } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const InfoModal = ({ showInfoModal, openCloseInfoModal, job }) => {
    return ( 
        <div className='Modal'>
            <Modal open={showInfoModal} onClose={openCloseInfoModal}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <FontAwesomeIcon 
                                icon={faTimes} 
                                onClick={openCloseInfoModal}
                                className='icon-close'
                            />
                        </div>
                        <div className='modal-body'>
                            <FontAwesomeIcon 
                                icon={faInfoCircle}
                                style={{ fontSize: '50px', margin: '20px', color: '#575757' }}
                            />
                            <h1>{job}</h1>
                            <button
                                className='btn-acept'
                                onClick={openCloseInfoModal}
                            >Acept</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
     );
}
 
export default InfoModal;