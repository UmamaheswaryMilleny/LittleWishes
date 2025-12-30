import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import logo from "../assets/logo.png";

export default function Register() {
  return (
    <section className="auth">
      <Snowfall
        snowflakeCount={80}
        color="#FFFFFF"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div className="auth-box">
        <img src={logo} alt="LittleWishes logo" className="auth-logo" />

        <h1>Begin Your Journey ✨</h1>
        <p>Create an account to write your first letter.</p>

        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="btn primary">Register</button>
        </form>

        <span className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </section>
  );
}
