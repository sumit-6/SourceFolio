import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();
    try {
      if(!email || !password) {
        setError("All fields are mandatory");
        return;
      }
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    try {
      if(!email||!password||!confirmPassword){
        setError("All fields are mandatory")
        return;;
      }
      if (password !== confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const clear = () => {
    setError("");
  }

  return (
    <div className="form-body">
    <div className="form_main">
        <input type="checkbox" id="chk" aria-hidden="true" onClick={clear} />
        <div className="signup">
            <form>
                <label for="chk" aria-hidden="true" className='form__label'>Login</label>
                <input type="email" name="email" placeholder="myemail@gmail.com" className="form__input"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" name="password" placeholder="password" className="form__input" 
                value={password} onChange={(e) => setPassword(e.target.value)} required />
                {error!==""? <div className="error">*{error}</div>:""}
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
                {error!==""? <div className="error">*{error}</div>:""}
                <button className="form__button" onClick={createAccount}>Sign Up</button>
            </form>

        </div>

    </div>
    </div>
  );
};

export default Login;
