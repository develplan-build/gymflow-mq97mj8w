# GymFlow

Complete B2B SaaS for Gym Management.

## Setup
1. `cd server && npm install`
2. `cd client && npm install --legacy-peer-deps`

## Environment Variables
Copy `.env.example` to `.env` and fill the keys.

- `VITE_API_URL`: Backend URL
- `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`: Supabase keys
- `SUPABASE_SERVICE_KEY`: Supabase service role key
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`: Stripe keys
- `RESEND_API_KEY`, `EMAIL_FROM`: Resend keys

## Run
- Backend: `cd server && npm start`
- Frontend: `cd client && npm run build && node serve.cjs`