import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { removePeep } from '../../store/peeps/Peeps.actions';

import person from './person.png'
import './PeepCard.css';

function PeepCard(props) {
  
  const {data} = props;
  const dispatch = useDispatch();
  
  let sessionKey = sessionStorage.getItem('sessionKey');
  let sessionUserId = parseInt(sessionStorage.getItem('userId'));

  const handleClick = async () => {
    await dispatch(removePeep({sessionKey: sessionKey, peepId: data.id}));
    console.log("Peep deleted");
  }

  const displayTime = (timeString) => {
    let date = timeString.substring(0, 10);
    let time = timeString.substring(11, 19);
    return time + "  " + date;
  }

  return (
    <div class="card mt-4 shadow-sm">
      <div class="card-header">
        <div class="d-flex justify-content-start">
          <div class="p-2"><img src={person} alt="person" height="30" width="30"></img></div>
          <h5 class="pt-2">{data.user.handle}</h5>
        </div>
      </div>
      <div class="card-body">
        <h4>{data.body}</h4>
      </div>
      <div class="card-footer text-muted pb-0">
        <p>{displayTime(data.created_at)}</p>
      </div>
      {/* <Link to={`/peeps/${data.id}`}>
        <div className="peep-container">
          <p>{data.body}</p>
          <p>{data.user.handle}</p>
          <p>{data.created_at}</p>
        </div>
      </Link>
      { sessionUserId === data.user.id && <Button onClick={handleClick}/> } */}
    </div>
  );
}

export default PeepCard;