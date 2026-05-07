import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, message, phone, type } = body;

  const subject = type === 'enquiry'
    ? `New Campaign Enquiry from ${firstName}`
    : `New Contact Message from ${firstName} ${lastName}`;

  const html = `
    <h2>${subject}</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName ?? ''}</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hellogrowthfolio@gmail.com',
      subject,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}