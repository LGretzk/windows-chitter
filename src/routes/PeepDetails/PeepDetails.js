import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPeeps } from '../../store/peeps/Peeps.actions';

function PeepDetails() {
  const { peepId } = useParams();
  let peepIdInt = parseInt(peepId);
  const dispatch = useDispatch();
  let peeps = useSelector(state => state.peeps);
  let [peep] = peeps.filter(peep => peep.id === peepIdInt);

  useEffect(() => {
      async function load() {
        await dispatch(loadPeeps());
      }
    load();
  }, [peepId, dispatch]);

  return (
    <div>
      <h1>This is the individual peep's page</h1>
      <div className="peep-container">
        <p>{peep.body}</p>
        <p>{peep.user.handle}</p>
        <p>{peep.created_at}</p>
      </div>
    </div>
  );
}

export default PeepDetails;