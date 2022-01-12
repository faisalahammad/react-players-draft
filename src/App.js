import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Draft from './components/Draft/Draft';
import Header from './components/Header/Header';
import Players from './components/Players/Players';

function App() {
  const [players, setPlayers] = useState([]);
  const handleAddPlayer = (newPlayer) => {
    const newCart = [...players, newPlayer];
    setPlayers(newCart);
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
          <div className="col-md-8 col-sm-12">
            <h2>Available Players</h2>
            {players.length > 0 && (
              <div className="row">
                {players.map(player => (
                  <div className='col-md-4 col-sm-6 col-xs-6 my-3' key={player.player_id}>
                    <Players player={player} handleAddPlayer={handleAddPlayer } />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-12">
            <h2>Drafted Players</h2>

            {players.length > 0 && (
              <ol>
                {players.map(player => (
                  <li key={player.player_id}>
                    <Draft player={player} />
                  </li>
                ))}
              </ol>
            )}

            {/* <Draft players={players} /> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
