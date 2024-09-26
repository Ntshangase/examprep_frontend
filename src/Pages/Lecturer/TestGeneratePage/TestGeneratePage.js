import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestGeneratePage.css';

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

const TestGeneratePage = () => {
  const [selectedTopics, setSelectedTopics] = useState({});
  const [totalWeight, setTotalWeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    navigate('/ViewClass/1', { state: { selectedTopics } });
  };

  //1st page
  const [testName, setTestName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [instructions, setInstructions] = useState('');
  const [totalGrade, setTotalGrade] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log({ testName, dueDate, instructions, totalGrade });

      // Reset form fields after submission
      setTestName('');
      setDueDate('');
      setInstructions('');
      setTotalGrade('');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className='test-generate-page-half1'>
          <form onSubmit={handleSubmit}>
                {/* Test Name */}
                <div className="test-generate-page-form-group">
                    <label>Test Name</label>
                    <input
                        type="text"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        placeholder="Enter test name"
                        required
                    />
                </div>

                {/* Due Date */}
                <div className="test-generate-page-form-group">
                    <label>Due Date</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>

                {/* Instructions */}
                <div className="test-generate-page-form-group">
                    <label>Instructions</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Enter instructions for the test"
                        required
                    />
                </div>

                {/* Total Grade */}
                <div className="test-generate-page-form-group">
                    <label>Total Grade (Marks)</label>
                    <input
                        type="number"
                        value={totalGrade}
                        onChange={(e) => setTotalGrade(e.target.value)}
                        placeholder="Enter total grade"
                        required
                    />
                </div>
            </form>
        </div>
        <div className="main-content">
          <div className="test-container">
            <h1>Select Domains to Generate Test</h1>
            {domains.map((domain) => (
              <div key={domain.title} className="domain-section">
                <h2>{domain.title}</h2>
                {domain.topics.map((topic) => (
                  <div key={topic} className="topic-row">
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

            <div className="total-weight">
              <span>Total Weight for the Test:</span>
              <input className="total-weight-input" type="text" value={totalWeight} readOnly />

              <button className="generate-button" onClick={handleGenerateTest}>
              Create Test
            </button>
            </div>

          </div>

          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-box">
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

export default TestGeneratePage;
