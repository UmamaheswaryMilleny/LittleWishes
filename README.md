# Little Wishes 🎄✨

<div align="center">
  <img src="./client/public/logo.png" alt="Little Wishes Logo" width="120" />
  <br />
</div>

**Letters Through Santa to Your Younger Self.**

Little Wishes is a heartwarming, Christmas-themed application designed to let users reconnect with their inner child. It allows you to send "gentle gifts" and kind messages to your younger self, nurturing past interests and offering the encouragement you might have needed back then.

## 📸 Screenshots

<div align="center">
  <img src="./client/public/screenshots/landing_page.jpeg" alt="Landing Page" width="800" />
  <p><em>The Landing Page - A warm welcome to the app.</em></p>
  <br />

  <img src="./client/public/screenshots/login.jpeg" alt="Login Page" width="800" />
  <p><em>Login Page - Secure authentication.</em></p>
  <br />

  <img src="./client/public/screenshots/register.jpeg" alt="Register Page" width="800" />
  <p><em>Register Page - Join the magic.</em></p>
  <br />

  <img src="./client/public/screenshots/gifts_step1.jpeg" alt="Gifts - Step 1" width="800" />
  <p><em>Gifts Step 1 - Choose a skill area.</em></p>
  <br />

  <img src="./client/public/screenshots/gifts_step2.jpeg" alt="Gifts - Step 2" width="800" />
  <p><em>Gifts Step 2 - Select gentle gifts.</em></p>
  <br />

  <img src="./client/public/screenshots/gifts_step3.jpeg" alt="Gifts - Step 3" width="800" />
  <p><em>Gifts Step 3 - Review and add a message.</em></p>
  <br />

  <img src="./client/public/screenshots/dashboard_initial.jpeg" alt="Dashboard - Initial" width="800" />
  <p><em>Dashboard (Initial) - Before sending any gifts.</em></p>
  <br />

  <img src="./client/public/screenshots/dashboard_submitted.jpeg" alt="Dashboard - Submitted" width="800" />
  <p><em>Dashboard (Submitted) - After Santa has received your wishes.</em></p>
</div>


## 📖 About The Project

This project serves as a reflective and therapeutic tool wrapped in a festive UI. Users can:
- **Choose their younger age** (from 7 to 17).
- **Select a skill area** they wish to encourage (e.g., Coding, Drawing, Music).
- **Pick "gentle starter gifts"** that are low-pressure and fun.
- **Write a personal letter** to their younger self.
- **"Send" it via Santa**, visualizing the care and support for their past self.

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Styling:** Vanilla CSS (Custom Christmas Theme)
- **Backend / Auth:** [Supabase](https://supabase.com/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Effects:** [React Snowfall](https://github.com/cahilfoley/react-snowfall)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/littlewishes.git
   cd littlewishes/client
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Environment Setup**
    create a `.env` file in the `client` directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```sh
   npm run dev
   ```

## 🌟 Key Features

- **Landing Page:** A warm welcome with a festive hero section.
- **Authentication:** Secure Login and Registration via Supabase.
- **Interactive Gifts Page:**
  - Dynamic age selection.
  - Category-based gift suggestions.
  - Custom gift input.
  - Message editor.
- **Dashboard:** A central hub to view your letters and gifts (Santa's delivery status).
- **Visual Effects:** Falling snow and responsive, premium holiday design.

## 📂 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Reusable UI components (Hero, ProtectedRoute)
│   ├── pages/           # Page views (Landing, Login, Gifts, Dashboard)
│   ├── App.jsx          # Main application component & Routing
│   ├── main.jsx         # Entry point
│   └── supabaseClient.js # Supabase configuration
├── .env                 # Environment variables
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## 📜 License

Distributed under the MIT License.

---
*Spread a little magic this Christmas!* 🎅🎁
