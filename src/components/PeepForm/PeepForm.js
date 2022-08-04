import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uploadPeep } from '../../store/peeps/Peeps.actions';

function PeepForm() {

  const nav = useNavigate();
  const dispatch = useDispatch();

  let sessionKey = sessionStorage.getItem('sessionKey');
  let userId = sessionStorage.getItem('userId');

  const handleSubmitPeep = async (event) => {
    event.preventDefault();
    await dispatch(uploadPeep(event.target));
    console.log('Peep posted');
  }

  const handleFocus = () => {
    if (!sessionKey) {
      nav("/login");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitPeep}>
        <input type="text" name="message" placeholder="What's on your mind?" onFocus={handleFocus}></input>
        <input type="hidden" name="sessionKey" value={sessionKey || ''}></input>
        <input type="hidden" name="userId" value={userId || ''}></input>
        <button type="submit">Peep</button>
      </form>
    </div>
  );
}

export default PeepForm;