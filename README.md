🎄 LittleWishes — Letters Through Santa to Your Younger Self
📖 Project Description

LittleWishes is a Christmas-themed web application that allows users to send gentle guidance, encouragement, and small starter gifts to their younger self through Santa 🎅.

Instead of focusing on regret or pressure, the app promotes kindness, curiosity, and emotional growth by letting users choose a skill they wish they had started earlier and sending thoughtful resources, habits, and messages to their past self (ages 7–17).

The goal is to transform “I wish I had started earlier” into “I would help myself start gently.”

✨ Features

🎁 Select one skill category (Coding, Communication, Drawing, Reading, Music, Confidence)

🎯 Choose younger self’s age (7–17)

🧸 Pick beginner-friendly gifts and resources

✍️ Write a kind message to your younger self

🎅 One-time Santa delivery (can send only once)

🔐 User authentication (Register / Login)

🚫 Gifts page blocked after delivery

❄️ Christmas snowfall animation

🎨 Festive red-green-gold themed UI

📦 Delivery summary dashboard

🛠 Tech Stack Used

Frontend: React + Vite

Routing: React Router

Authentication: Supabase Auth

State Management: React Hooks

Styling: Custom CSS (Christmas theme)

Animations: react-snowfall

Notifications: react-hot-toast

Hosting: Vercel

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/your-username/LittleWishes.git
cd LittleWishes

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables

Create a .env file in the root directory:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4️⃣ Run the application locally
npm run dev


The app will be available at:

http://localhost:5173

🌍 Hosting on Vercel
Build command
npm run build

Install Vercel CLI (once)
npm install -g vercel

Deploy
vercel


Deployment settings:

Framework: Vite

Build command: npm run build

Output directory: dist

Routing Fix (Required)

Create a vercel.json file:

{
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}

🖼 Screenshots of the Application

📌 Add screenshots here after deployment or local run


![Landing Page](<img width="1896" height="879" alt="landing" src="https://github.com/user-attachments/assets/903e0a6d-d22d-427d-9e21-1b10b3dbf1aa" />

![Register Page](<img width="1893" height="873" alt="regsiter" src="https://github.com/user-attachments/assets/4e95d2b9-a7e0-4ce9-af12-67ca9c84de1a" />


![Login Page](<img width="1906" height="874" alt="login" src="https://github.com/user-attachments/assets/da7a4cdb-dcc9-4074-b065-475c8358424b" />


![Gifts Page](<img width="1902" height="873" alt="gift" src="https://github.com/user-attachments/assets/40b464b8-33f8-4eb1-8953-6c275cb65cb0" />)<img width="1898" height="880" alt="gift2" src="https://github.com/user-attachments/assets/c0175bee-2721-4acf-87b8-f32e984b1217" /><img width="1896" height="887" alt="gift3" src="https://github.com/user-attachments/assets/12ff3211-2539-421e-97d9-93d483cef886" />

![Dashboard Page](https://github.com/user-attachments/assets/321b6b01-af82-425d-87e6-f7de519d3f7c)


🎄 Summary

LittleWishes blends emotional design with simple technology to create a meaningful Christmas experience — encouraging reflection, kindness, and gentle learning for the future.
