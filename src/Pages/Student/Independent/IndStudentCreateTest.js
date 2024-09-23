import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import './IndStudentCreateTest.css';

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

    // Calculate total weight
    let total = 0;
    Object.values(newSelectedTopics).forEach((domainTopics) => {
      Object.values(domainTopics).forEach((count) => {
        total += Number(count || 0);
      });
    });
    setTotalWeight(total);
  };

  const handleGenerateTest = () => {
    setIsModalOpen(true); // Show the modal
  };

  const handleStartTest = () => {
    setIsModalOpen(false); // Close the modal
    // Navigate to the test writing page with selected topics
    navigate('/IndStudentWriteTest', { state: { selectedTopics } });
  };

  return (
    <div className="generate-test-dashboard">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="content-area">
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
              <span>Total Weight for the Test:</span>
              <input type="text" value={totalWeight} readOnly />
            </div>
          </div>
          <br />
          <button className="generate-test-button" onClick={handleGenerateTest}>
            Generate Test
          </button>


          {/* Modal */}
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
