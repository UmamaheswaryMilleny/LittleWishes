import { useState } from "react";
import { Link } from "react-router-dom";
import Snowfall from "react-snowfall";
import logo from "../assets/logo.png";
import { supabase } from "../supabaseClient";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bg1 from "../assets/bg5.jpg";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 👁
  const [name, setName] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

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
          currentAge,
        },
     emailRedirectTo: `${import.meta.env.VITE_SITE_URL}/login`,

      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(
        "Registration successful 🎄 Please Login.",
        {
          style: {
            background: "#0B3D2E",
            color: "#FFFFFF",
            border: "1px solid #D4AF37",
          },
        }
      );

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setCurrentAge("");
    }
  };

  return (
    <section
      className="auth bg"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <Snowfall snowflakeCount={80} color="#FFFFFF" />

      <div className="auth-box">
        <Link to="/">
          <img src={logo} alt="LittleWishes logo" className="auth-logo" />
        </Link>

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

          <input
            type="number"
            placeholder="Current Age (18+)"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            min={18}
            required
          />

          {/* 👁 PASSWORD */}
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* 👁 CONFIRM PASSWORD */}
          <div className="input-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

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
