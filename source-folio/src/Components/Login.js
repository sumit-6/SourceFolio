import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  /*return (
    <>
      <div
        className="card my-5 shadow"
        style={{
          borderRadius: "15px",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <div className="container py-4">
          <div className="text-center">
            <h1 className="heading1">
              <b>
                <u>WELCOME</u>
              </b>
            </h1>
            {error && <p className="error">{error}</p>}
            <form>
              <div className="form-group loginsign">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="form-group loginsign">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Your Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                onClick={(e) => logIn(e)}
                className="btn btn-primary submitbutton"
              >
                Log In
              </button>
            </form>
            <Link to="/create-account">
              Don't have an account? Create one here
            </Link>
          </div>
        </div>
      </div>
    </>
  );*/

  return (
    <div className="form-body">
    <div className="form_main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
            <form>
                <label for="chk" aria-hidden="true" className='form__label'>Login</label>
                <input type="email" name="email" placeholder="myemail@gmail.com" className="form__input"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" name="password" placeholder="password" className="form__input" 
                value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="form__button" onClick={logIn}>Login</button>
                
            </form>
        </div>
        <div class="login">
            <form>
                <label for="chk" aria-hidden="true" className='form__label'>Sign Up</label>
                <input type="email" name="email" placeholder="myemail@gmail.com" className="form__input" value={email}
                  onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" name="password " placeholder="password" className="form__input" value={password}
                  onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" name="re-pswd" placeholder="re-enter password" className="form__input"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button className="form__button" onClick={createAccount}>Sign Up</button>
            </form>

        </div>

    </div>
    </div>
  );
};

export default Login;
