# Growthfolio - Setup & Deployment Guide

## Table of Contents
1. [Running in VS Code](#running-in-vs-code)
2. [Contact Form & Enquiry System](#contact-form--enquiry-system)
3. [Project Structure](#project-structure)
4. [Deployment to Vercel](#deployment-to-vercel)

---

## Running in VS Code

### Prerequisites (Install These First)

#### 1. Node.js & NPM
- **Download**: https://nodejs.org/ (LTS version recommended)
- **Verify Installation**:
  ```bash
  node --version
  npm --version
  ```

#### 2. Git (Optional but Recommended)
- **Download**: https://git-scm.com/
- **Verify Installation**:
  ```bash
  git --version
  ```

#### 3. VS Code
- **Download**: https://code.visualstudio.com/

### Step-by-Step Setup

#### Step 1: Open the Project in VS Code
```bash
# Navigate to your project folder
cd /path/to/your/project

# Open VS Code
code .
```

#### Step 2: Open Terminal in VS Code
- Press `Ctrl + \`` (backtick) or go to `View > Terminal`

#### Step 3: Install Dependencies
```bash
npm install
```
This will download and install all required packages from `package.json`. This may take 2-5 minutes.

#### Step 4: Run Development Server
```bash
npm run dev
```

**Expected Output**:
```
  ▲ Next.js 16.1.6
  - Local:        http://localhost:3000
```

#### Step 5: View Your Website
- Open your browser and go to: **http://localhost:3000**
- You should see the Growthfolio website

#### Step 6: Stop the Server
- Press `Ctrl + C` in the terminal

---

## Contact Form & Enquiry System

### How It Currently Works

#### 1. **User Submits Message on Contact Page**
- User fills in: First Name, Last Name, Email, Message
- User clicks "Send Message" button
- Form data is logged to browser console (for development)

#### 2. **Current Status: Client-Side Only**
The form currently only works in the browser. To make it fully functional, you need to:

### Option 1: Using EmailJS (No Backend Required)

EmailJS allows you to send emails directly from the frontend. Follow these steps:

#### Step 1: Sign Up on EmailJS
1. Go to https://www.emailjs.com/
2. Click "Sign Up Free"
3. Create an account with your email

#### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email

#### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:
   ```
   Subject: New Contact Form Submission

   Name: {{firstName}} {{lastName}}
   Email: {{email}}
   Message: {{message}}
   ```

#### Step 4: Install EmailJS in Your Project
```bash
npm install @emailjs/browser
```

#### Step 5: Update Contact Form
Replace the `handleSubmit` function in `/app/contact/page.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // Initialize EmailJS (do this once when component mounts)
    emailjs.init('YOUR_PUBLIC_KEY'); // Get from EmailJS dashboard
    
    await emailjs.send(
      'YOUR_SERVICE_ID', // From EmailJS
      'YOUR_TEMPLATE_ID', // From EmailJS
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      }
    );
    
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Failed to send message. Please try again.');
  }
};
```

### Option 2: Using Vercel's Built-in Integrations

If you deploy to Vercel, you can use serverless functions:

#### Step 1: Create API Route
Create file: `/app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'hellogrowthfolio@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Message from ${body.firstName} ${body.lastName}</h2>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

#### Step 2: Set Environment Variables
Create `.env.local` file in project root:
```
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
```

### How Users Know About Their Message (Enquiry Confirmation)

#### Currently:
- User sees "Message sent successfully" popup
- Data logs to browser console

#### To Add Email Notifications:
1. In the contact form, add this after successful submission:
```typescript
await fetch('/api/send-confirmation', {
  method: 'POST',
  body: JSON.stringify({
    email: formData.email,
    name: formData.firstName,
  }),
});
```

2. Create `/app/api/send-confirmation/route.ts` to send them a confirmation email

#### To Create an Admin Enquiry Dashboard:
1. Add a database (Supabase, MongoDB, etc.)
2. Store form submissions in the database
3. Create an admin page (`/admin/enquiries`) to view all messages
4. Send yourself an email notification for each submission

---

## Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Main layout
│   ├── globals.css           # Global styles
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── campaigns/
│   │   └── page.tsx          # Campaigns page
│   └── gallery/
│       └── page.tsx          # Gallery page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx        # Navigation bar
│   │   ├── footer.tsx        # Footer
│   │   └── floating-whatsapp.tsx
│   └── home/
│       ├── services-grid.tsx
│       ├── clients-marquee.tsx
│       └── about-section.tsx
├── public/
│   ├── logo.png              # Logo file
│   └── brands/               # Brand logos
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript config
```

---

## Deployment to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com/
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Step 3: Set Environment Variables on Vercel
1. Go to Project Settings
2. Environment Variables
3. Add your email credentials and API keys

---

## Common Issues & Solutions

### Issue: "Cannot find module" errors
**Solution**: Run `npm install` again

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Kill process on port 3000
npx kill-port 3000
# Then run
npm run dev
```

### Issue: Email not sending
**Solution**: 
- Check Gmail App Password is correct
- Enable "Less secure app access" in Gmail settings
- Verify email address is correct

---

## Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm build

# Run production build
npm start

# Check for errors
npm run lint
```

---

For more help, visit:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- EmailJS Docs: https://www.emailjs.com/docs/
