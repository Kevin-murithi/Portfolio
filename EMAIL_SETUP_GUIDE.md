# Email Setup Guide for Contact Form

This guide will help you set up email functionality for your portfolio contact form using EmailJS.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key** - you'll need this later

## Step 5: Configure Your Portfolio

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Important Notes

- Keep your `.env` file private and never commit it to version control
- The `.env.example` file shows the required format
- EmailJS free plan allows 200 emails per month
- Make sure to update your email address in the Contact component if needed

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Not receiving emails**: Verify your EmailJS service setup
- **Template errors**: Make sure template variable names match exactly
- **CORS errors**: Ensure your domain is added to EmailJS allowed origins

## Security

- EmailJS handles the email sending securely
- No sensitive credentials are exposed in the client code
- The public key is safe to use in frontend applications
