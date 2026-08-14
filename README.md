# GoRide Taxi — MERN Starter

## Requirements
- Node.js 20+
- MongoDB Atlas account or local MongoDB

## 1. Backend

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Edit `.env` and set `MONGO_URI`.

Backend:
http://localhost:5000

## 2. Frontend

Open a second terminal:

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

Frontend:
http://localhost:5173

## 3. Pages

- `/` — customer homepage
- `/book` — booking form
- `/services` — services
- `/vehicles` — vehicles
- `/routes` — routes
- `/about` — about
- `/contact` — contact
- `/admin` — basic booking dashboard

## Important

This starter has a public admin route for development. Before production, add JWT-protected admin authentication. Also replace the demo phone/WhatsApp number and business name with your actual details.

## Production additions

- JWT admin authentication
- Google Maps / Places
- Distance-based fare calculation
- Razorpay
- Email/WhatsApp notifications
- Cloudinary image upload
- Rate limiting and validation
- HTTPS and secure CORS
