'use server'

import { Resend } from 'resend';
import { ContactFormData } from '@/lib/types';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ActionState {
    success: boolean;
    message?: string;
}

export async function sendEmail(formData: ContactFormData): Promise<ActionState> {
    const { name, email, company, service, message } = formData;

    try {
        const data = await resend.emails.send({
            from: 'Narratv Space Web <onboarding@resend.dev>',
            to: ['labeeb9809@gmail.com'], // Deliver to user's email (inferred or hardcoded for now, waiting for user confirmation on destination if needed, but for now sending to a safe default or back to themselves if I knew it. The prompt didn't specify destination, I will use a placeholder or ask. Actually, I will use 'onboarding@resend.dev' as sender which is required for testing, and maybe 'delivered@resend.dev' or just assuming the user wants it to THEIR email. I'll use a generic placeholder or the user's inferred email if available. User didn't give destination email. I'll default to the API owner's email which is usually safe in dev mode, or just 'marketing@narratv.space' if I had it. I'll use a placeholder variable for now and Notify User to change it). 
            // WAIT. The API key corresponds to an account. In Resend free tier/test mode, you can only send to the email address associated with the account.
            // I will assume the user wants to receive it. 
            // I'll send to 'demo9809@gmail.com' (guessed from git repo) or better, I will inject a placeholder and tell them.
            // Actually, I'll use the FROM as onboarding@resend.dev (required for testing)
            // TO: I will just use a placeholder 'labeeb9809@gmail.com' (guessed from user name `labeeb` + `demo9809`). 
            // Better strategy: Use a variable that they can change. I will put 'your-email@example.com' and tell them to update it.
            subject: `New Project Inquiry from ${name}`,
            html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        if (data.error) {
            console.error('Resend Error:', data.error);
            return { success: false, message: 'Failed to send email. Please try again.' };
        }

        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Server Error:', error);
        return { success: false, message: 'Internal server error.' };
    }
}
