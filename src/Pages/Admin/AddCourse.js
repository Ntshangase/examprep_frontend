import React from 'react';
import "./AddCourse.css"

export default function AddCourse() {
  return (
    <div>
        <h2>Add Course Page</h2>
        <form>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="domainName">Domain Name:</label>
          <input
            type="text"
            id="domainName"
            name="domainName"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Course
        </button>
      </form>
    </div>
  )
}
