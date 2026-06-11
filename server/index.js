const express = require('express');
const cors = require('cors');
const stripeRoutes = require('./stripe');
const emailRoutes = require('./email');
const supabaseRoutes = require('./supabase');

const app = express();

// Stripe webhook needs raw body
app.use('/api/webhook', express.raw({ type: 'application/json' }), stripeRoutes.webhook);

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/checkout', stripeRoutes.checkout);
app.use('/api/email', emailRoutes);
app.use('/api/data', supabaseRoutes);

// Demo endpoints (empty data)
app.get('/api/demo/members', (req, res) => res.json([]));
app.get('/api/demo/stats', (req, res) => res.json({ totalMembers: 0, activeSubscriptions: 0, monthlyRevenue: 0 }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});