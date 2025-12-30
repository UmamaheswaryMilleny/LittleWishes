import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import logo from "../assets/logo.png";

export default function Login() {
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

        <h1>Welcome Back 🎄</h1>
        <p>Log in to continue your journey with LittleWishes.</p>

        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit" className="btn primary">
            Login
          </button>
        </form>

        <span className="auth-link">
          New here? <Link to="/register">Create an account</Link>
        </span>
      </div>
    </section>
  );
}
