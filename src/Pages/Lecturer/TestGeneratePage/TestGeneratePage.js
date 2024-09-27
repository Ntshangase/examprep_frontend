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
  const [testName, setTestName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [instructions, setInstructions] = useState('');
  const [totalGrade, setTotalGrade] = useState('');
  const [selectedTopics, setSelectedTopics] = useState({});
  const [totalWeight, setTotalWeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // For displaying validation errors
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

  const handleGenerateTest = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsModalOpen(true);
  };

  const handleStartTest = () => {
    setIsModalOpen(false);
    const testData = {
      testName,
      dueDate,
      instructions,
      totalGrade,
      selectedTopics,
      totalWeight,
    };
    console.log(testData); // Log all test data for submission
    navigate('/ViewClass/1', { state: { selectedTopics } }); // Navigate to the next page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const grade = Number(totalGrade);
    const weight = Number(totalWeight);

    // Validation logic
    if (grade < weight) {
      setErrorMessage('Total grade must be greater than or equal to the total weight.');
      return;
    }
    if (weight <= 3) {
      setErrorMessage('Total weight for the test must be greater than 3.');
      return;
    }

    setErrorMessage(''); // Clear any previous error messages
    handleGenerateTest(e); // Call the function to generate the test
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <form onSubmit={handleSubmit} className="test-generate-page-form">
          {/* Test Configuration */}
          <div className="test-generate-page-half1">
            <h2>Create Test</h2>
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

            <div className="test-generate-page-form-group">
              <label>Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>

            <div className="test-generate-page-form-group">
              <label>Instructions</label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Enter instructions for the test"
                required
              />
            </div>

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

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Error message */}
          </div>

          {/* Test Questions */}
          <div className="main-content">
            <h2>Select Domains to Generate Test</h2>
            <div className="test-container">
              {domains.map((domain) => (
                <div key={domain.title} className="domain-section">
                  <h3>{domain.title}</h3>
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
              </div>
            </div>
            <button className="generate-button" type="submit">Create Test</button>
          </div>
        </form>

        {/* Modal for test confirmation */}
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
  );
};

export default TestGeneratePage;