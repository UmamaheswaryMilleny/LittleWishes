// import { useState } from "react";
// import { supabase } from "../supabaseClient";
// import toast from "react-hot-toast";

// export default function WriteLetter({ onDelivered }) {
//   const [age, setAge] = useState("");
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const handleSubmit = async () => {
//     const ageNumber = Number(age);

//     if (!ageNumber || ageNumber < 7 || ageNumber > 17) {
//       toast.error("Please choose an age between 7 and 17");
//       return;
//     }

//     if (!text.trim()) {
//       toast.error("Letter cannot be empty");
//       return;
//     }

//     setLoading(true);

//     const {
//       data: { user },
//     } = await supabase.auth.getUser();

//     const { data, error } = await supabase
//       .from("letters")
//       .insert({
//         user_id: user.id,
//         younger_age: ageNumber,
//         delivered_year: new Date().getFullYear() - (18 - ageNumber),
//         letter_text: text,
//       })
//       .select()
//       .single();

//     setLoading(false);

//     if (error) {
//       toast.error(error.message);
//     } else {
//       toast.success("🎄 Your letter has been delivered through Santa!");
//       onDelivered(data);
//     }
//   };

//   return (
//     <>
//       <h1>🎄 Write a Letter to Your Younger Self</h1>
//       <p>Select an age below 18 and write with kindness.</p>

//       <div className="write-card">
//         <label>👶 Younger Age</label>
//         <input
//           type="number"
//           min="7"
//           max="17"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           placeholder="Age between 7 and 17"
//         />
//         {/* ✅ ADD IT HERE */}
//         <p className="rule-note">
//           👶 Choose an age between <strong>7 and 17</strong> — Santa delivers
//           only to your younger self.
//         </p>

//         <label>💌 Your Letter</label>
//         <textarea
//           rows="6"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="What do you wish you had known?"
//         />

//         <button
//           className="btn primary"
//           onClick={handleSubmit}
//           disabled={loading}
//         >
//           {loading ? "Sending…" : "Send Letter Through Santa 🎅"}
//         </button>

//         <p className="rule-note">
//           ✉️ One letter per person — Santa delivers only once.
//         </p>
//       </div>
//     </>
//   );
// }
