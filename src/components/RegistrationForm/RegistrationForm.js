import { register } from "../../apis/authentication";
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
//     { setSessionKey, setUserId }
//   const nav = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     const response = await login(event.target);
//     setSessionKey(response.session_key);
//     setUserId(response.user_id);
//     console.log('User logged in');
//     nav("/peeps");
//   }

  return (
    // <div>
    //   <h1>This is the login page</h1>
    //   <form onSubmit={handleLogin}>
    //     <input type="text" name="handle" placeholder="Username"></input>
    //     <input type="password" name="password" placeholder="Password"></input>
    //     <button type="submit" value="login">Login</button>
    //   </form>
    // </div>

    <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3 text-start">
                            <label for="username" class="form-label">Username</label>
                            <input type="username" class="form-control" id="username"></input>
                        </div>
                        <div class="mb-3 text-start">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password"></input>
                        </div>
                        <button type="submit" class="btn btn-secondary">Register</button>
                    </form>
                    <div class="mt-4">
                        <p class="mb-0">Already a member?</p><button type="button" class="btn btn-link" data-bs-target="#loginModal" data-bs-toggle="modal">Login here</button>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  );
}

export default RegistrationForm;