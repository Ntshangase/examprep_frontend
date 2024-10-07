import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IndStudentCreateTest.css';
import Sidebar from '../../../Components/Sidebar/Sidebar';

const domains = [
  {
    title: '1.0 Attacks, Threats, and Vulnerabilities',
    topics: [
      'Social Engineering Techniques',
      'Types of Attacks',
      'Application and Network Attacks',
      'Vulnerabilities',
    ],
  },
  {
    title: '2.0 Implementation',
    topics: [
      'Security Concepts in an Enterprise Environment',
      'Virtualization and Cloud Computing',
      'Secure Application Development',
      'Authentication and Authorization',
    ],
  },
  {
    title: '3.0 Governance, Risk, and Compliance',
    topics: ['Security Controls', 'Regulations and Standards', 'Risk Management'],
  },
];

const IndStudentCreateTest = () => {

  const links = [
		{path: "/StudentDashboards", pathName: "Home"},
		{path: "/IndStudentdash", pathName: "Course Details"},
	]
  
  const [selectedTopics, setSelectedTopics] = useState({});
  const [totalWeight, setTotalWeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate();

  const handleTopicChange = (domainTitle, topic, value) => {
    const newSelectedTopics = {
      ...selectedTopics,
      [domainTitle]: {
        ...selectedTopics[domainTitle],
        [topic]: value,
      },
    };

    setSelectedTopics(newSelectedTopics);

    let total = 0;
    Object.values(newSelectedTopics).forEach((domainTopics) => {
      Object.values(domainTopics).forEach((count) => {
        total += Number(count || 0);
      });
    });
    setTotalWeight(total);
  };

  const handleGenerateTest = () => {
    setIsModalOpen(true); 
  };

  const handleStartTest = () => {
    setIsModalOpen(false); 
    navigate('/IndStudentWriteTest', { state: { selectedTopics } });
  };

  return (
    <div className="generate-test-dashboard">
      
      <div className="dashboard-content">
        <Sidebar links={links}/>
        <div className="independent-student-content-area">
          <div className="create-test-container">
            <h1>Select Domains to Generate Test</h1>

            {domains.map((domain) => (
              <div key={domain.title} className="domain-section">
                <h2>{domain.title}</h2>

                {domain.topics.map((topic) => (
                  <div key={topic} className="topic-item">
                    <label>{topic}</label>
                    <input
                      type="number"
                      min="0"
                      placeholder="Enter questions"
                      value={selectedTopics[domain.title]?.[topic] || ''}
                      onChange={(e) => handleTopicChange(domain.title, topic, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            ))}

            <div className="total-weight-section">
              <p className="independent-student-total-weight-text">Total:</p>
              <input className="independent-student-total-weight" type="text" value={totalWeight} readOnly />
            </div>
          </div>
          <button className="generate-test-button" onClick={handleGenerateTest}>
            Generate Test
          </button>

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <p>Click Okay to start the test</p>
                <button className="modal-button" onClick={handleStartTest}>
                  Okay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndStudentCreateTest;
