import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Players = (props) => {
  const { display_name, image_path, height, weight, player_id, birthdate } = props.player;
  const playerPrice = Math.floor(Math.random() * (10000000 + player_id)) + 1;
  const [birthday, setBirthday] = useState('*****');
  const showBDate = () => setBirthday(birthdate);
  const addMember = props.addMember;

  return (
    <div className="card border-danger">
      <img src={image_path} className="card-img-top" alt={display_name} />
      <div className="card-body">
        <h5 className="card-title">{display_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Height:</b> {height}</li>
        <li className="list-group-item"><b>Weight:</b> { weight }</li>
        <li className="list-group-item"><b>Birthdate:</b> { birthday }</li>
        <li className="list-group-item"><b>Value:</b> ${ playerPrice.toLocaleString() }</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-danger" onClick={()=>addMember(display_name)}>
          Add <FontAwesomeIcon icon={faPlus} />
        </button>
        <button className="btn btn-warning ms-1" onClick={showBDate}>
          Show <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
    </div>
  );
};

export default Players;