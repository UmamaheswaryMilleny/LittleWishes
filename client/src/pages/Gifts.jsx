import { useState } from "react";
import Snowfall from "react-snowfall";
import { useNavigate } from "react-router-dom";


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
  drawing: [
    "Drawing kit",
    "Colored pencils",
    "Sketchbook with prompts",
  ],
  reading: [
    "Illustrated books",
    "Curiosity magazines",
    "Flash cards",
  ],
  music: [
    "Simple musical instrument",
    "Music learning CD",
    "Rhythm game",
  ],
  confidence: [
    "Positive affirmation cards",
    "Habit tracker notebook",
    "Motivation storybook",
  ],
};

export default function Gifts() {
    const navigate = useNavigate();

const handleAddToBag = () => {
  // ❗ Safety check
  if (selectedGifts.length === 0 && !customGift) {
    alert("Please add at least one gift for your younger self 🎁");
    return;
  }

  const delivery = {
    youngerAge: 13, // or from earlier step
    yearDelivered: 2015,
    categories: selectedCategories,
    gifts: selectedGifts,
    customGift: customGift,
    letter: message,
    createdAt: new Date().toISOString(),
  };

  // ✅ SAVE TO LOCAL STORAGE
  localStorage.setItem(
    "littleWishesDelivery",
    JSON.stringify(delivery)
  );

  // ✅ REDIRECT TO DASHBOARD
  navigate("/dashboard");
};

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGifts, setSelectedGifts] = useState([]);
  const [customGift, setCustomGift] = useState("");
  const [message, setMessage] = useState("");

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const toggleGift = (gift) => {
    setSelectedGifts((prev) =>
      prev.includes(gift) ? prev.filter((g) => g !== gift) : [...prev, gift]
    );
  };

  return (
    <section className="gifts">
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
            Choose small gifts and ideas that could spark curiosity and
            confidence — without pressure.
          </p>
        </header>

        {/* CATEGORIES */}
        <section>
          <h2>🧠 Choose a skill area</h2>
          <div className="category-grid">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`category-card ${
                  selectedCategories.includes(cat.id) ? "active" : ""
                }`}
                onClick={() => toggleCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* GIFTS */}
        {selectedCategories.map((cat) => (
          <section key={cat}>
            <h3>🎁 Gentle starters for {cat}</h3>
            <div className="gift-grid">
              {GIFTS[cat].map((gift) => (
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
        ))}

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
            placeholder="Don’t worry about being perfect. Just enjoy learning and have fun."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </section>

        {/* PREVIEW */}
        <section className="preview">
          <h3>🎅 Santa’s Delivery Preview</h3>
          <p><strong>Categories:</strong> {selectedCategories.join(", ")}</p>
          <p><strong>Gifts:</strong> {selectedGifts.join(", ") || "None yet"}</p>
          {customGift && <p><strong>Extra gift:</strong> {customGift}</p>}
          <p className="preview-msg">{message || "Your kind message will appear here."}</p>
        </section>

        {/* CTA */}
        <div className="cta">
    <button
  type="button"
  className="btn primary"
  onClick={handleAddToBag}
>
  Add These to Santa’s Bag 📮
</button>

        </div>
      </div>
    </section>
  );
}
