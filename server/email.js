const express = require('express');
const { Resend } = require('resend');
const router = express.Router();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

router.post('/send', async (req, res) => {
  if (!resend) {
    return res.status(503).json({ error: 'Resend non configurato' });
  }
  try {
    const { to, subject, html } = req.body;
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to,
      subject,
      html
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;