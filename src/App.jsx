import { useState } from 'react'
import chelseaImage from './images/chelsea.png';
import ManUImage from './images/manu.png';
import './App.css'

function App() {
  const [ChelseaScores, setChelseaScore] = useState(0);
  const [ManUScores, setManUScores] = useState(0);
  
  return (
    <div className="App">
      <h1>Live Scores</h1>
      <div className='container'>
          <div className='club-logo'>
          <img src={chelseaImage} alt="Chelsea FC"/>
          <p>Chelsea FC</p>
          <p className='score'>{ChelseaScores}</p>
          </div>
              <h2>VS</h2>
          <div className='club-logo'>
          <img src={ManUImage} alt="Manchester United" />
          <p>Manchester United</p>
          <p className='score'>{ManUScores}</p>
          </div>
      </div>
      
      <div className="btn-continer">
        <button className='chelseaBtn' onClick={() => setChelseaScore((ChelseaScores) => ChelseaScores + 1)}>
          Update Chelsea Scores
        </button>
        <button className='ManUBtn' onClick={() => setManUScores((ManUScores) => ManUScores + 2)}>
          Update Man-U Scores
        </button>
      </div>
  
    </div>
  );
}

export default App
