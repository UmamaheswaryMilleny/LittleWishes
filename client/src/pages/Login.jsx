import { useState } from "react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import logo from "../assets/logo.png";
import { supabase } from "../supabaseClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
if (error) {
  toast.error(error.message);
} else {
  toast.success("Welcome back 🎅");
     setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
}

  };

  return (
    <section className="auth">
      <Snowfall snowflakeCount={80} color="#FFFFFF" />

      <div className="auth-box">
        <img src={logo} alt="LittleWishes logo" className="auth-logo" />
        <h1>Welcome Back 🎄</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn primary">
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <span className="auth-link">
          New here? <Link to="/register">Create an account</Link>
        </span>
      </div>
    </section>
  );
}
