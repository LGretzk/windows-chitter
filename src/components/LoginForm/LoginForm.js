import { login } from "../../apis/authentication";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
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

    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
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
                        <button type="submit" class="btn btn-secondary">Login</button>
                    </form>
                    <div class="mt-4">
                        <p class="mb-0">Not a member yet?</p><button type="button" class="btn btn-link" data-bs-target="#registerModal" data-bs-toggle="modal">Register here</button>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  );
}

export default LoginForm;