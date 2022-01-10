import React, { useEffect, useState } from 'react';
import './styles/app.css';
import { ServicesAPI } from './api/services';
import { ACTION_SERVICE_GET_JOBS } from './types/index';
import InfoModal from './components/InfoModal';

const App = () => {

  const [successService, setSuccessService] = useState(false);
  const [listJobs, setListJobs] = useState([]);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [job, setJob] = useState('');

  const getServiceJobs = async () => {
    try {
      let response = await ServicesAPI.callService({ action: ACTION_SERVICE_GET_JOBS });
      if (response.status === 200 && response.data) {
        setSuccessService(true);
        setListJobs(response.data);
      } else {
        throw new Error('error in service request');
      }
    } catch (error) {
      console.log('error loading jobs service.', error);
    }
  };

  const openCloseInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };

  const openInfoModal = (value) => {
    const job = value.getAttribute('job');
    setJob(job);
    setShowInfoModal(true);
  }; 

  useEffect(() => {
    getServiceJobs();
  }, []);


  return (
    <div className="container-home">
      <InfoModal 
        showInfoModal={showInfoModal}
        openCloseInfoModal={openCloseInfoModal}
        job={job}
      />
      {successService ? (
        <div className="content-cards">
          {listJobs.map((job) => (
            <div className="card" key={job.id}>
              <p>{job.location.toUpperCase()}</p>
              <h1>{job.job}</h1>
              <div className="content-button">
                <button
                  type='button'
                  job={job.job}
                  onClick={(e) => openInfoModal(e.currentTarget)}
                >Apply</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Error loading service</h1>
      )}
    </div>
  );
}

export default App;