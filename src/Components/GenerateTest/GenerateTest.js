import React from 'react';
import './GenerateTest.css';

const GenerateTest = () => {
  return (
    <div className="generate-test">
      {/* Domain 1 */}
      <div className="domain">
        <h2>1.0 Attacks, Threats, and Vulnerabilities</h2>
        
        <div className="topic">
          <span>Topic 1: Social Engineering Techniques</span>
          <input type="number" min="0" defaultValue="4" />
        </div>
        
        <div className="topic">
          <span>Topic 2: Malware Types</span>
          <input type="number" min="0" defaultValue="5" />
        </div>
        
        <div className="topic">
          <span>Topic 3: Application Attacks</span>
          <input type="number" min="0" defaultValue="3" />
        </div>
        
        <div className="topic">
          <span>Topic 4: Network Attacks</span>
          <input type="number" min="0" defaultValue="4" />
        </div>
      </div>
      
      {/* Domain 2 */}
      <div className="domain">
        <h2>2.0 Architecture and Design</h2>
        
        <div className="topic">
          <span>Topic 1: Security Frameworks and Controls</span>
          <input type="number" min="0" defaultValue="3" />
        </div>
        
        <div className="topic">
          <span>Topic 2: Secure System Design</span>
          <input type="number" min="0" defaultValue="4" />
        </div>
        
        <div className="topic">
          <span>Topic 3: Network Security Design</span>
          <input type="number" min="0" defaultValue="2" />
        </div>
        
        <div className="topic">
          <span>Topic 4: Cryptography Basics</span>
          <input type="number" min="0" defaultValue="3" />
        </div>
      </div>
      
      {/* Domain 3 */}
      <div className="domain">
        <h2>3.0 Implementation</h2>
        
        <div className="topic">
          <span>Topic 1: Secure Protocols</span>
          <input type="number" min="0" defaultValue="5" />
        </div>
        
        <div className="topic">
          <span>Topic 2: Security Solutions Implementation</span>
          <input type="number" min="0" defaultValue="6" />
        </div>
        
        <div className="topic">
          <span>Topic 3: Wireless Security</span>
          <input type="number" min="0" defaultValue="4" />
        </div>
        
        <div className="topic">
          <span>Topic 4: Endpoint Security</span>
          <input type="number" min="0" defaultValue="5" />
        </div>
      </div>
      
      {/* Domain 4 */}
      <div className="domain">
        <h2>4.0 Operations and Incident Response</h2>
        
        <div className="topic">
          <span>Topic 1: Incident Response Procedures</span>
          <input type="number" min="0" defaultValue="4" />
        </div>
        
        <div className="topic">
          <span>Topic 2: Disaster Recovery</span>
          <input type="number" min="0" defaultValue="3" />
        </div>
        
        <div className="topic">
          <span>Topic 3: Forensics Techniques</span>
          <input type="number" min="0" defaultValue="2" />
        </div>
        
        <div className="topic">
          <span>Topic 4: Business Continuity</span>
          <input type="number" min="0" defaultValue="3" />
        </div>
      </div>

      {/* Footer: Test Summary and Create Button */}
      <div className="test-footer">
        <span>Total Weight for the Test:</span>
        <input type="number" value="30" readOnly />
        <button className="create-test-btn">Create Test</button>
      </div>
    </div>
  );
};

export default GenerateTest;
