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
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 col-lg-6 mx-auto">
          <PeepForm/>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-8 col-lg-6 mx-auto">
          {peeps.map(peep => <PeepCard data={peep} key={peep.id}/>)}
        </div>
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