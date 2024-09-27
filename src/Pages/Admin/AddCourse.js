import React, { useState } from 'react';
import './AddCourse.css';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../Components/Sidebar/AdminSidebar';

export default function AddCourse() {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseImage, setCourseImage] = useState(null);
  const [domains, setDomains] = useState([{ name: '', topics: [''] }]);

  const navigate = useNavigate();

  const handleCourseNameChange = (e) => setCourseName(e.target.value);
  const handleCourseDescriptionChange = (e) => setCourseDescription(e.target.value);
  const handleCourseImageChange = (e) => setCourseImage(e.target.files[0]);

  const handleDomainChange = (index, value) => {
    const newDomains = [...domains];
    newDomains[index].name = value;
    setDomains(newDomains);
  };

  const handleTopicChange = (domainIndex, topicIndex, value) => {
    const newDomains = [...domains];
    newDomains[domainIndex].topics[topicIndex] = value;
    setDomains(newDomains);
  };

  const handleAddDomain = () => {
    setDomains([...domains, { name: '', topics: [''] }]);
  };

  const handleAddTopic = (index) => {
    const newDomains = [...domains];
    newDomains[index].topics.push('');
    setDomains(newDomains);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    navigate('/ManageCourse');
  };

  return (
    <div className="add-course-container">
      <AdminSidebar />

      <main className="add-course-main">
        <h1 className="add-course-title">Add Course</h1>
        <form className="add-course-form" onSubmit={handleSubmit}>
          <div className="add-course-form-group">
            <label>Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={handleCourseNameChange}
              placeholder="Enter course name"
              required
            />
          </div>

          <div className="add-course-form-group">
            <label>Course Description</label>
            <textarea
              value={courseDescription}
              onChange={handleCourseDescriptionChange}
              placeholder="Enter course description"
              required
            />
          </div>

          <div className="add-course-form-group">
            <label>Upload Course Image</label>
            <input type="file" alt="courseImage" onChange={handleCourseImageChange} accept="image/*" />
          </div>

          <div className="add-course-domains-section">
            {domains.map((domain, domainIndex) => (
              <div key={domainIndex} className="add-course-domain-group">
                <div className="add-course-form-group">
                  <label>Domain Name</label>
                  <input
                    type="text"
                    value={domain.name}
                    onChange={(e) => handleDomainChange(domainIndex, e.target.value)}
                    placeholder="Enter domain name"
                    required
                  />
                </div>

                <div className="add-course-topics-section">
                  <label>Topics</label>
                  {domain.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="add-course-form-group add-course-topic-input">
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => handleTopicChange(domainIndex, topicIndex, e.target.value)}
                        placeholder="Enter topic"
                      />
                    </div>
                  ))}
                  <button type="button" className="add-course-add-topic-button" onClick={() => handleAddTopic(domainIndex)}>
                    + Add Topic
                  </button>
                </div>
              </div>
            ))}

            <button type="button" className="add-course-add-domain-button" onClick={handleAddDomain}>
              + Add Domain
            </button>
          </div>

          <button type="submit" className="add-course-submit-button">
            Add Course
          </button>
        </form>
      </main>
    </div>
  );
}