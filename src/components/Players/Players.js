import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Players = (props) => {
// console.log(props.player);
  const player = props.player;
  const playerPrice = Math.floor(Math.random() * (1000000 + player.player_id)) + 1;

  return (
    <div className="card border-danger">
      <img src={player.image_path} className="card-img-top" alt={player.display_name} />
      <div className="card-body">
        <h5 className="card-title">{player.display_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Height:</b> {player.height}</li>
        <li className="list-group-item"><b>Weight:</b> { player.weight }</li>
        <li className="list-group-item"><b>Value:</b> ${ playerPrice.toLocaleString() }</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-danger" onClick={() => props.handleAddUser(player)}>
          Sign { player.firstname } <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default Players;