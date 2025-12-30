import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import { supabase } from "../supabaseClient";
export default function Dashboard() {
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState(null);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  useEffect(() => {
    const saved = localStorage.getItem("littleWishesDelivery");

    if (saved) {
      setDelivery(JSON.parse(saved));
    }
  }, []);

  return (
    <section className="dashboard">
      <button className="btn primary logout-btn" onClick={handleLogout}>
        Logout
      </button>
      <Snowfall
        snowflakeCount={60}
        color="#FFFFFF"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      <div className="dashboard-content">
        {/* 🔁 STATE 1: NO GIFTS */}
        {!delivery && (
          <>
            <h1>🎅 Santa hasn’t delivered anything yet</h1>
            <p>Let’s prepare a gentle gift for your younger self.</p>

            <button className="btn primary" onClick={() => navigate("/gifts")}>
              Choose Gifts for My Younger Self 🎁
            </button>

            <p className="soft-note">
              You can send one gentle gift and message. Santa delivers only
              once.
            </p>
          </>
        )}

        {/* 🔁 STATE 2: GIFTS DELIVERED */}
        {delivery && (
          <>
            <h1>🎅 Santa has delivered your gifts 🎄</h1>

            <div className="summary-card">
              <p>
                👶 Younger age: <strong>{delivery.youngerAge}</strong>
              </p>
              <p>
                🗓 Year delivered: <strong>{delivery.yearDelivered}</strong>
              </p>
              <p>
           🎁 Gifts delivered: <strong>{delivery.gifts?.length || 0}</strong>

              </p>
            </div>

            <div className="delivery-grid">
              <div className="delivery-card">
                <h3>🎁 Gifts Delivered</h3>
                <ul>
                  {delivery.gifts.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                  {delivery.customGift && <li>{delivery.customGift}</li>}
                </ul>
              </div>

              <div className="delivery-card">
                <h3>🧠 Categories Chosen</h3>
                <ul>
    <li>{delivery.category}</li>
  </ul>
              </div>

              <div className="delivery-card highlight">
                <h3>💌 Message from Future You</h3>
                <p>“{delivery.letter}”</p>
              </div>
            </div>

            <div className="community">
              <h3>🌍 Today’s Santa Deliveries</h3>
              <p>🎁 Gifts delivered today: 2,431</p>
              <p>🧠 Most chosen category: Skills & Curiosity</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
