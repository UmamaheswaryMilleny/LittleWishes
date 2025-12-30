import { useState } from "react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import logo from "../assets/logo.png";
import { supabase } from "../supabaseClient";
import toast from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // NEW
  const [name, setName] = useState("");
  const [currentAge, setCurrentAge] = useState(""); // NEW
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // ✅ BASIC VALIDATION
    if (password !== confirmPassword) {
      toast.error("Passwords do not match 🎄");
      return;
    }

    if (Number(currentAge) < 18) {
      toast.error("Santa delivers letters only from adults (18+) 🎅");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          currentAge, // ✅ STORE CURRENT AGE IN USER METADATA
        },
        emailRedirectTo: "http://localhost:5173/login",
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(
        "Registration successful 🎄 Please check your email to confirm your account.",
        {
          style: {
            background: "#0B3D2E",
            color: "#FFFFFF",
            border: "1px solid #D4AF37",
          },
        }
      );

      // ✅ CLEAR FORM FIELDS
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setCurrentAge("");
    }
  };

  return (
    <section className="auth">
      <Snowfall snowflakeCount={80} color="#FFFFFF" />

      <div className="auth-box">
        <img src={logo} alt="LittleWishes logo" className="auth-logo" />
        <h1>Begin Your Journey ✨</h1>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* ✅ CURRENT AGE */}
          <input
            type="number"
            placeholder="Current Age (18+)"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            min={18}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* ✅ CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className="btn primary">
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <span className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </section>
  );
}
