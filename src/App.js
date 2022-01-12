import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players';

function App() {
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  const addMember = (name) => {
    setTeam([...team, name]);
  }

  const api_token = 'fmw6EBoZo07U5PPmvbxR8XUi0sflEYM4ecawmXTbs58i34hGQmjJzUAmK7pj';
  useEffect(() => {
    fetch(`https://soccer.sportmonks.com/api/v2.0/countries/462/players?api_token=${api_token}`, {
      method: 'Get',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(singlePlayer => setPlayers(singlePlayer.data))
  }, [])



  return (
    <div className="App">
      <Header />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <h2>Available Players</h2>

            {players.length > 0 && (
              <div className="row">
                {players.map(player => (
                  <div className='col-lg-4 col-md-6 col-sm-6 my-3' key={player.player_id}>
                    <Players player={player} addMember={addMember} />
                  </div>
                ))}
              </div>
            )}

          </div>
          <div className="col-md-3 col-sm-12">
            <h2>Drafted Players</h2>

            {team.length > 0 && (
              <ol>
                {team.map((name, idx) => (
                  <li key={idx}>{ name }</li>
                ))}
              </ol>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
