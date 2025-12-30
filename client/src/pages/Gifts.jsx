import { useState } from "react";
import Snowfall from "react-snowfall";
import { useNavigate } from "react-router-dom";
import bg1 from "../assets/bg5.jpg";
import toast from "react-hot-toast";

const CATEGORIES = [
  { id: "coding", label: "💻 Coding & Technology" },
  { id: "communication", label: "🗣 Communication & English" },
  { id: "drawing", label: "🎨 Drawing & Creativity" },
  { id: "reading", label: "📚 Reading & Learning" },
  { id: "music", label: "🎵 Music & Expression" },
  { id: "confidence", label: "🌱 Confidence & Habits" },
];

const GIFTS = {
  coding: [
    "Beginner coding puzzle game",
    "Colorful coding book for kids",
    "Logic and thinking cards",
  ],
  communication: [
    "Small English storybook",
    "Cartoon / TV show DVD",
    "Listening & speaking cards",
  ],
  drawing: ["Drawing kit", "Colored pencils", "Sketchbook with prompts"],
  reading: ["Illustrated books", "Curiosity magazines", "Flash cards"],
  music: ["Simple musical instrument", "Music learning CD", "Rhythm game"],
  confidence: [
    "Positive affirmation cards",
    "Habit tracker notebook",
    "Motivation storybook",
  ],
};

export default function Gifts() {
  const navigate = useNavigate();

  // ✅ ONLY ONE CATEGORY
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGifts, setSelectedGifts] = useState([]);
  const [customGift, setCustomGift] = useState("");
  const [message, setMessage] = useState("");
  const [youngerAge, setYoungerAge] = useState("");

const handleAddToBag = () => {
  if (!selectedCategory) {
    toast.error("Please choose one skill area first 🎯", {
      style: {
        background: "#0B3D2E",
        color: "#FFFFFF",
        border: "1px solid #D4AF37",
      },
    });
    return;
  }
 if (!youngerAge) {
    toast.error("Please select your younger self’s age 👶", {
      style: {
        background: "#0B3D2E",
        color: "#FFFFFF",
        border: "1px solid #D4AF37",
      },
    });
    return;
  }
  if (selectedGifts.length === 0 && !customGift) {
    toast.error("Please add at least one gift for your younger self 🎁", {
      style: {
        background: "#0B3D2E",
        color: "#FFFFFF",
        border: "1px solid #D4AF37",
      },
    });
    return;
  }

  const delivery = {
    youngerAge: Number(youngerAge), // ✅ dynamic
    yearDelivered: new Date().getFullYear() - Number(youngerAge),
    category: selectedCategory,
    gifts: selectedGifts,
    customGift,
    letter: message,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem("littleWishesDelivery", JSON.stringify(delivery));

  toast.success("Santa has received your wishes 🎅✨", {
    style: {
      background: "#0B3D2E",
      color: "#FFFFFF",
      border: "1px solid #D4AF37",
    },
  });

  setTimeout(() => {
    navigate("/dashboard");
  }, 1200);
};

  const selectCategory = (id) => {
    setSelectedCategory(id);
    setSelectedGifts([]); // 🔁 reset gifts when category changes
  };

  const toggleGift = (gift) => {
    setSelectedGifts((prev) =>
      prev.includes(gift) ? prev.filter((g) => g !== gift) : [...prev, gift]
    );
  };

  return (
    <section className="gifts bg" style={{ backgroundImage: `url(${bg1})` }}>
      <Snowfall
        snowflakeCount={60}
        color="#FFFFFF"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div className="gifts-content">
        {/* TITLE */}
        <header className="gifts-header">
          <h1>🎄 What would help your younger self start gently?</h1>
          <p>
            Choose one skill and send gentle gifts — no pressure, just care.
          </p>
        </header>
<div className="age">
  <h3>👶 Choose your younger self’s age</h3>
  <select
    className="custom-input"
    value={youngerAge}
    onChange={(e) => setYoungerAge(e.target.value)}
  >
    <option value="">Select age (7–17)</option>
    {Array.from({ length: 11 }, (_, i) => i + 7).map((age) => (
      <option key={age} value={age}>
        {age} years old
      </option>
    ))}
  </select>
</div>
        {/* CATEGORIES */}
        <section>
          <h2>🧠 Choose ONE skill area</h2>
          <div className="category-grid">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`category-card ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
                onClick={() => selectCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* GIFTS (ONLY FOR SELECTED CATEGORY) */}
        {selectedCategory && (
          <section>
            <h3>🎁 Gentle starters for {selectedCategory}</h3>
            <div className="gift-grid">
              {GIFTS[selectedCategory].map((gift) => (
                <label key={gift} className="gift-card">
                  <input
                    type="checkbox"
                    checked={selectedGifts.includes(gift)}
                    onChange={() => toggleGift(gift)}
                  />
                  <span>{gift}</span>
                </label>
              ))}
            </div>
          </section>
        )}

        {/* CUSTOM GIFT */}
        <section>
          <h3>✨ Add your own gift idea</h3>
          <input
            className="custom-input"
            placeholder="A book, game, or activity you think would help…"
            value={customGift}
            onChange={(e) => setCustomGift(e.target.value)}
          />
        </section>

        {/* MESSAGE */}
        <section>
          <h3>💌 Write a kind message to your younger self</h3>
          <textarea
            className="message-box"
            placeholder="Don’t worry about being perfect. Just enjoy learning."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </section>

        {/* PREVIEW */}
        <section className="preview">
          <h3>🎅 Santa’s Delivery Preview</h3>
          <p>
  <strong>Younger age:</strong>{" "}
  {youngerAge ? `${youngerAge} years old` : "Not selected"}
</p>

          <p>
            <strong>Skill:</strong> {selectedCategory || "None selected"}
          </p>
          <p>
            <strong>Gifts:</strong> {selectedGifts.join(", ") || "None yet"}
          </p>
          {customGift && (
            <p>
              <strong>Extra gift:</strong> {customGift}
            </p>
          )}
          <p className="preview-msg">
            {message || "Your kind message will appear here."}
          </p>
        </section>

        {/* CTA */}
        <div className="cta">
          <button className="btn primary" onClick={handleAddToBag}>
            Add These to Santa’s Bag 📮
          </button>
        </div>
      </div>
    </section>
  );
}
