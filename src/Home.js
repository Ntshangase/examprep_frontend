import React from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate(); // Get the navigate function

  const handleNavigate = () => {
    navigate('/ModeratorDashboard');
  };
  return (
    <div>
        <h1>Temporal landing page for exam prep application</h1>
            <button onClick={handleNavigate}>Moderator</button>

    </div>
  )
}
export default Home