import { useState, useEffect } from 'react'
import chelseaImage from './images/chelsea.png';
import ManUImage from './images/manu.png';
import './App.css'

function App() {
  const [ChelseaScores, setChelseaScore] = useState(0);
  const [ManUScores, setManUScores] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (ManUScores > ChelseaScores) {
      setScale(1.5);
    } else if (ManUScores === ChelseaScores) {
      setScale(1);
    } else {
      setScale(1.5);
    }
  }, [ChelseaScores, ManUScores]);

  return (
    <div className="App">
      <h1>Live Scores</h1>
      <div className='container'>
          <div className='club-logo'>
          <img src={chelseaImage}  style={{ transform:  `scale(${ChelseaScores >= ManUScores ? scale : 1})` }}alt="Chelsea FC"/>
          <p>Chelsea FC</p>
          <p className='score'>{ChelseaScores}</p>
          </div>
              <h2>VS</h2>
          <div className='club-logo'>
          <img src={ManUImage} style={{ transform:  `scale(${ManUScores >= ChelseaScores ? scale : 1})` }} alt="Manchester United" />
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

export default App;
