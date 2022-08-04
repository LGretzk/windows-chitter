import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPeeps } from '../../store/peeps/Peeps.actions';

import PeepForm from '../../components/PeepForm/PeepForm';
import PeepCard from '../../components/Peep/PeepCard';

function Peeps() {
  const dispatch = useDispatch();
  let peeps = useSelector(state => state.peeps);

  useEffect(() => {
    async function load() {
      await dispatch(loadPeeps());
    }
    load();
  }, [peeps, dispatch]);

  return (
    <div>
      <h1>This is the peeps page</h1>
      <div>
        <PeepForm/>
      </div>
      <div>
        {peeps.map(peep => <PeepCard data={peep} key={peep.id}/>)}
      </div>
    </div>
  );
}

export default Peeps;

// Each peep
// {
// body: "terry test"
// created_at: "2022-06-06T09:30:32.469Z"
// id: 1426
// likes: Array []
// updated_at: "2022-06-06T09:30:32.469Z"
// user: Object { id: 1091, handle: "terry" }
// handle: "terry"
// id: 1091
// }
// Peeps = array of objects