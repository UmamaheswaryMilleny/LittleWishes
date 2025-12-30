import { Link } from "react-router-dom";
import santa2 from "../assets/santa2.png";
import Snowfall from "react-snowfall";
import logo from "../assets/logo.png";
// import AnimatedCursor from "react-animated-cursor";

export default function Hero() {
  return (
    <section className="hero">
      <Snowfall
        snowflakeCount={120}
        color="#FFFFFF"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
{/* <AnimatedCursor
  innerSize={8}
  outerSize={35}
  color="255, 255, 255"
  outerAlpha={0.15}
  innerScale={1}
  outerScale={1.4}
  trailingSpeed={6}
/> */}



        <div className="logo">
          <img src={logo} alt="LittleWishes logo" />
        </div>
      <div className="hero-content">
        <div className="text">
          <h1>LittleWishes</h1>
          <h2>Letters Through Santa to Your Younger Self</h2>

          <p>
LittleWishes is a Christmas-themed reflection app where you write letters to your younger self—sharing lessons, encouragement, and future-ready skills you wish you had learned earlier, turning regret into growth, clarity, and confidence.
          </p>

          <div className="buttons">
            <Link to="/login" className="btn primary">
              Login
            </Link>
            <Link to="/register" className="btn secondary">
              Register
            </Link>
          </div>
        </div>

        <div className="image">
          <img src={santa2} alt="Santa Claus" />
        </div>
      </div>

      <div className="snowfall" />
    </section>
  );
}
